class CreateFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
      t.string :name, null: false
      t.string :image_url 
      t.string :flavor, null: false
      t.text :description, null: false
      t.string :restaurant_id, null: false

      
      t.belongs_to :user, null: false
      
      t.timestamps null: false
    end
    add_index :foods, :name, unique: true
  end
end
