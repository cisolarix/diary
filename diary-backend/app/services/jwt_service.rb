class JwtService
  def initialize(secret: ENV.fetch("DIARY_JWT_SECRET"))
    @secret = secret
    @expiration_hours = 720 # 30 days
  end

  def generate_token(user_id, open_id)
    payload = {
      sub: user_id.to_s,
      open_id: open_id,
      iat: Time.now.to_i,
      exp: (@expiration_hours * 3600).seconds.from_now.to_i
    }
    JWT.encode(payload, @secret, "HS256")
  end

  def decode_token(token)
    JWT.decode(token, @secret, true, algorithm: "HS256").first
  rescue JWT::DecodeError, JWT::ExpiredSignature
    nil
  end

  def user_id_from_token(token)
    payload = decode_token(token)
    payload&.dig("sub")&.to_i
  end

  def open_id_from_token(token)
    payload = decode_token(token)
    payload&.dig("open_id")
  end
end
