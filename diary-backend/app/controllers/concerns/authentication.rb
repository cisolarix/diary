module Authentication
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_request
  end

  private

  def authenticate_request
    header = request.headers["Authorization"]
    if header.blank? || !header.start_with?("Bearer ")
      render json: { message: "Unauthorized" }, status: :unauthorized
      return
    end

    token = header.delete_prefix("Bearer ")
    payload = jwt_service.decode_token(token)
    if payload.nil?
      render json: { message: "Unauthorized" }, status: :unauthorized
      return
    end

    user_id = jwt_service.user_id_from_token(token)
    @current_user = User.find_by(id: user_id)
    if @current_user.nil?
      render json: { message: "Unauthorized" }, status: :unauthorized
      nil
    end
  end

  def current_user
    @current_user
  end

  def jwt_service
    @jwt_service ||= JwtService.new
  end
end
