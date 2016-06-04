class AddUserImageUrl < ActiveRecord::Migration
  def change
    add_column :users, :img_url, :string
    add_column :users, :header_img_url, :string
  end
end
