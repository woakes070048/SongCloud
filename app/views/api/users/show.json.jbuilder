json.extract! @user, :id, :username
json.image_url asset_path(@user.image.url)
json.songs @user.songs do |song|
  json.partial! 'api/songs/song', song: song
end
