json.extract! song, :id, :title, :description, :user_id, :private, :created_at
json.artist song.artist.username
json.file_url asset_path(song.file.url)
json.image_url asset_path(song.image.url)
