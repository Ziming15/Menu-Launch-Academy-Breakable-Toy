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

Food.find_or_create_by(
  name:"test1234",
  image_url:"https://thumbs.dreamstime.com/b/lentil-tomato-soup-bowl-garmished-chives-more-url-http-www-istockphoto-com-file-search-php-action-lightboxid-here-116246592.jpg",
  flavor: "Spicy",
  description: "Testawd",
  restaurant_id: "kP1b-7BO_VhWk_0tvuA_tw",
  user_id: 3
)