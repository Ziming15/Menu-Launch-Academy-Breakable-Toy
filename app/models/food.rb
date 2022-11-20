class Food < ApplicationRecord
  validates :name, presence: true
  validates :image_url, presence: true
  validates :flavor, presence: true
  validates :restaurant_id, presence: true

  belongs_to :user
end