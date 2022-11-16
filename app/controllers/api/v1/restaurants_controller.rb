class Api::V1::RestaurantsController < ApiController
  require 'yelp/fusion'

  def show
    client = Yelp::Fusion::Client.new("#{ENV["SUPER_SECRET_KEY"]}")

    results = client.search(params[:id], term: "restaurant")
    render json: results
  end
end