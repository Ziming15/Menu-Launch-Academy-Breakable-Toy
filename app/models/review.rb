class Review < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :rating, presence: true
  validates :food_id, presence: true

  belongs_to :user
end