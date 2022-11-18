class Api::V1::RestaurantsController < ApiController
  require 'yelp/fusion'

  def show
    client = Yelp::Fusion::Client.new("#{ENV["SUPER_SECRET_KEY"]}")
    hash = {
      term: "restaurant",
      limit: 50
    }
    results = client.search(params[:id], hash)
    render json: results
  end
end