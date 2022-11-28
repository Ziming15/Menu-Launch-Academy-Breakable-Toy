class Review < ApplicationRecord
  validates :title, presence: true
  validates :rating, presence: true
  validates :food_id, presence: true
  validates :username, presence: true

  belongs_to :user
end