module Api
  class AuthController < ApplicationController
    DEV_CODE = "dev-login".freeze

    def login
      code = params[:code]
      session = resolve_session(code)
      return if performed?

      user = User.find_or_create_by!(open_id: session[:open_id])

      token = jwt_service.generate_token(user.id, user.open_id)
      @login_result = {
        token: token,
        open_id: user.open_id,
        user_id: user.id,
        dev_mode: dev_mode? && !wechat_configured?
      }
    end

    private

    def resolve_session(code)
      return exchange_wechat_code(code) if wechat_configured?
      return dev_session(code) if dev_mode?

      render json: { message: "WeChat credentials are not configured" }, status: :service_unavailable
      nil
    end

    def dev_session(code)
      open_id = if code.blank? || code == DEV_CODE
        "dev-openid-local"
      else
        "dev-#{code}"
      end
      { open_id: open_id, session_key: "dev-session-key" }
    end

    def exchange_wechat_code(code)
      if code.blank?
        render json: { message: "code is required" }, status: :bad_request
        return nil
      end

      conn = Faraday.new(url: "https://api.weixin.qq.com") do |f|
        f.request :url_encoded
      end

      response = conn.get("/sns/jscode2session", {
        appid: ENV["WECHAT_APP_ID"],
        secret: ENV["WECHAT_APP_SECRET"],
        js_code: code,
        grant_type: "authorization_code"
      })

      result = JSON.parse(response.body) rescue {}
      open_id = result["openid"]

      if open_id.blank?
        errmsg = result["errmsg"].presence || "WeChat login failed"
        render json: { message: errmsg }, status: :bad_gateway
        return nil
      end

      { open_id: open_id, session_key: result["session_key"] }
    end

    def wechat_configured?
      ENV["WECHAT_APP_ID"].present? && ENV["WECHAT_APP_SECRET"].present?
    end

    def dev_mode?
      ENV["WECHAT_DEV_MODE"] == "true"
    end

    def jwt_service
      @jwt_service ||= JwtService.new
    end
  end
end
