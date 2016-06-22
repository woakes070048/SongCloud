json.extract! playlist, :id, :title, :description, :user_id, :private, :created_at
json.user playlist.user.username
json.user_img asset_path(playlist.user.image.url)
json.image_url asset_path(playlist.image.url)
json.songs playlist.songs do |song|
  json.partial! 'api/songs/song', song: song
end
