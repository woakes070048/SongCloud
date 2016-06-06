class RemoveOldSongColumns < ActiveRecord::Migration
  def change
    remove_column :songs, :file_url
    remove_column :songs, :img_url
  end
end
