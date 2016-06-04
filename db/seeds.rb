# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# User.destroy_all
# Song.destroy_all

guest = User.create(
  username: 'user',
  password: 'password'
)

g_eazy = User.create(
  username: 'G-Eazy',
  password: 'password',
  img_url: "http://img2-ak.lst.fm/i/u/avatar170s/843278c4b76df259a24924548ebebc9c.jpg",
  header_img_url: "http://static.wixstatic.com/media/4ac546_8086d6e35cc94492bf4493169ef5edf2.png/v1/fill/w_783,h_261,al_c,usm_0.66_1.00_0.01/4ac546_8086d6e35cc94492bf4493169ef5edf2.png"
)

songs = Song.create([
  { title: "Plastic Dreams (feat. Johanna Fey)",
    file_url: "http://dl.last.fm/static/1464895870/134636129/ea14937d51b8123ab4ab9793ffac609085253161725537ac4e343fa39c024557/G-Eazy+-+Plastic+Dreams+%28feat.+Johanna+Fay%29.mp3",
    img_url: "http://img2-ak.lst.fm/i/u/174s/d9f1b555a9cd4034c0aaf1e7fedb1b0d.jpg",
    user_id: g_eazy.id
  },

  { title: "Lady Killers (feat. Hoodie Allen)",
    file_url: "http://dl.last.fm/static/1464896742/134636130/afa36f775c9e0c5be9cb69052a030fd3c8460bc4f555efc21bec24e16344fe2f/G-Eazy+-+Lady+Killers+%28feat.+Hoodie+Allen%29.mp3",
    img_url: "http://img2-ak.lst.fm/i/u/174s/d9f1b555a9cd4034c0aaf1e7fedb1b0d.jpg",
    user_id: g_eazy.id
  },

  { title: "Hello",
    file_url: "http://dl.last.fm/static/1464896811/134636128/bb3b24628ecb4f6f3d5c3ae4646048cbb924a4eff5afd068ca39f3a13b7f0819/G-Eazy+-+Hello.mp3",
    img_url: "http://img2-ak.lst.fm/i/u/174s/d9f1b555a9cd4034c0aaf1e7fedb1b0d.jpg",
    user_id: g_eazy.id
  }
])
