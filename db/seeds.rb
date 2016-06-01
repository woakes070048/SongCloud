# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Song.destroy_all

users = User.create([
  { username: 'user', password: 'password'}
])

songs = Song.create([
  { title: "song1", file_url: "song1.url", user_id: users[0].id },
  { title: "song2", file_url: "song2.url", user_id: users[0].id },
  { title: "song3", file_url: "song3.url", user_id: users[0].id },
  { title: "song4", file_url: "song4.url", user_id: users[0].id },
  { title: "song5", file_url: "song5.url", user_id: users[0].id }
])
