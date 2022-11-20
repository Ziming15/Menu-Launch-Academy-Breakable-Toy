class Api::V1::FoodsController < ApiController
  before_action :authorize_admin, only: [:create]

  def create
    food = Food.new(food_params)
    food.user = current_user

    if food.save
      render json: food
    else
      render json: { errors: food.errors.full_messages.to_sentence }
    end
  end

  def food_params
    params.permit(:name, :image_url, :flavor, :restaurant_id)
  end
end
