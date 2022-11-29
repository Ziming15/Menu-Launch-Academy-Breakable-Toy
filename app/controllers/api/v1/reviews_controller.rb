class Api::V1::ReviewsController < ApiController
  before_action :authenticate_user, only: [:create, :destroy, :update]
  skip_before_action :verify_authenticity_token

  def create

    review = Review.new(review_params)
    review.user = current_user
    review.username = current_user.username
    if review.save
      render json: review
    else
      render json: {errors: review.errors.full_messages.to_sentence}
    end
  end

  def destroy
    Review.find_by(title: params[:id]).destroy
    render json: { 
      deletedMessage: "Review has been deleted!",
      reviews: Review.all
    }
  end

  def update

    updated_review = Review.find_by(title: params[:id])
    if updated_review.update(review_params)
      render json: Review.where(food_id: params[:food_id])
    else 
      render json: { errors: updated_review.errors.full_messages.to_sentence}
    end
  end

  private
  def review_params
    params.permit(:title, :body, :rating, :food_id)
  end
end