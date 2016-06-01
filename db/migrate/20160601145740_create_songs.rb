class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :file_url, null: false
      t.string :img_url, null: false
      t.text :description
      t.integer :user_id, null: false
      t.boolean :private, null:false, default: false
      t.timestamps null: false
    end

    add_index :songs, :user_id
  end
end
