json.extract! @user, :id, :username, :img_url, :header_img_url
json.songs @user.songs do |song|
  json.partial! 'api/songs/song', song: song
end
