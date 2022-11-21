class Food < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :image_url, presence: true
  validates :flavor, presence: true
  validates :restaurant_id, presence: true

  belongs_to :user
  has_many :reviews
end