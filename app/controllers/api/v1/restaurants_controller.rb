class Api::V1::RestaurantsController < ApiController
  def index
    binding.pry
    render json: Restaurant.all
  end
end