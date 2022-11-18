class Food < ApplicationRecord
  validates :name, presence: true
  validates :image_url, presence: true
  validates :flavor, presence: true

  belongs_to :restaurant
  belongs_to :user
end