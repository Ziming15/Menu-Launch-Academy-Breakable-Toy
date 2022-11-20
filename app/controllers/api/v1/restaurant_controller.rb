class Api::V1::RestaurantController < ApiController
  require 'yelp/fusion'

  def show
    client = Yelp::Fusion::Client.new("#{ENV["SUPER_SECRET_KEY"]}")
    results = client.business(params[:id])
    menu = Food.where(params[:restaurant_id])
    render json: {
      results: results,
      menu: menu
    }
  end
end