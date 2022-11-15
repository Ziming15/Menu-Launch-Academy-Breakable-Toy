class Api::V1::RestaurantsController < ApiController
  def index
    render json: Restaurant.all
  end
end