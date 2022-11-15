class ApiController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  protected

  def authorize_admin
    if !user_signed_in? || !(current_user.role == "admin")
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end

end