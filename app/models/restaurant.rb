class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :phone, presence: true
  validates :address, presence: true
  validates :image, presence: true
  validates :title, presence: true
  validates :price, presence: true
  validates :rating, presence: true
  validates :restaurant_id, presence: true

  has_many :foods
  belongs_to :user
end