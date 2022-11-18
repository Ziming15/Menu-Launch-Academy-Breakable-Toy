class LocationShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :address, :image, :title, :price, :rating, :restaurant_id
end
