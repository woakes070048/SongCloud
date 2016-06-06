class RemoveOldUserColumns < ActiveRecord::Migration
  def change
    remove_column :users, :img_url
    remove_column :users, :header_img_url
  end
end
