class Api::V1::RestaurantController < ApiController
  require 'yelp/fusion'

  def show
    client = Yelp::Fusion::Client.new("#{ENV["SUPER_SECRET_KEY"]}")
    results = client.business(params[:id])
    render json: results
  end
end