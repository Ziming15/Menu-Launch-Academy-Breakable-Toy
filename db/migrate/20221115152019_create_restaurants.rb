class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :phone, null: false
      t.string :address, null: false
      t.string :image, null: false
      t.string :title, null: false
      t.string :price, null: false
      t.string :rating, null: false
      t.string :restaurant_id, null: false

      t.timestamps null: false
    end
  end
end
