# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'yelp/fusion'
client = Yelp::Fusion::Client.new("#{ENV["SUPER_SECRET_KEY"]}")

results = client.search("Boston", term: "restaurants")

# results_1 = results.businesses[0]
# binding.pry
# restaurant_1 = Restaurant.create(name: results_1.name, phone: results_1.phone, address:results_1.location.display_address.join(", "), image: results_1.image_url, title: results_1.categories[0].title, price: results_1.price, rating: results_1.rating, restaurant_id: results_1.id)

# datas = []
# results.businesses.each do |business|
#   data = {}
#   data[:name] = business.name
#   data[:phone] = business.phone
#   data[:address] = business.location.display_address.join(", ")
#   data[:image] = business.image_url
#   data[:title] = business.categories[0].title
#   data[:price] = business.price
#   data[:rating] = business.rating
#   data[:restaurant_id] = business.id
#   datas << data
# end

# datas.each do |data|
#   Restaurant.create(name: data[:name], phone: data[:phone], address: data[:address], image: data[:image], title: data[:title], price: data[:price], rating: data[:rating], restaurant_id: data[:restaurant_id])
# end