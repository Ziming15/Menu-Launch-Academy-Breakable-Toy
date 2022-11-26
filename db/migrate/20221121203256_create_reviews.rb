class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body
      t.integer :rating, null: false
      t.string :food_id, null: false

      t.belongs_to :user, null: false
    end
  end
end
