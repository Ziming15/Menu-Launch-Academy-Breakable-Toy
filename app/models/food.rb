class Food < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :flavor, presence: true
  validates :restaurant_id, presence: true
  validates :description, presence: true
  belongs_to :user
  has_many :reviews
end