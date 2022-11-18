# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_admin = User.create(
  email: "admin@gmail.com",
  password: "adminpassword",
  username: "admin",
  role: "admin"
)

user_1 = User.create(
  email: "user1@gmail.com",
  password: "user1password",
  username: "user1"
)

user_2 = User.create(
  email: "user2@gmail.com",
  password: "user2password",
  username: "user2"
)

user_3 = User.create(
  email: "user3@gmail.com",
  password: "user3password",
  username: "user3"
)

user_4 = User.create(
  email: "user4@gmail.com",
  password: "user4password",
  username: "user4"
)

user_5 = User.create(
  email: "user5@gmail.com",
  password: "user5password",
  username: "user5"
)

user_6 = User.create(
  email: "user6@gmail.com",
  password: "user6password",
  username: "user6"
)

restaurant_1 = Restaurant.create(
  name: "Carmelina's",
  phone: "+16177420020",
  address: "77 Summer St",
  image: "https://s3-media2.fl.yelpcdn.com/bphoto/rxZBwIYFKwrn2U4676YmiQ/o.jpg",
  title: "Italian",
  price: "$$$",
  rating: "4.5",
  restaurant_id: "kP1b-7BO_VhWk_0tvuA_tw",
  user_id: user_admin
)

food_1 = Food.create(
  name: "Pasta",
  image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/qJSoZ8eOLSXkBq92py5zMg/o.jpg",
  flavor: "Spicy"
  user: user_admin,
  restaurant: restaurant_1.restaurant_id
)