# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Song.destroy_all

guest = User.create(
  username: 'user',
  password: 'password'
)

balmorhea = User.new(username: "Balmorhea", password: "password")
douglas_dare = User.new(username: "Douglas Dare", password: "password")
dream_koala = User.new(username: "Dream Koala", password: "password")
florrie = User.new(username: "Florrie", password: "password")
g_eazy = User.new(username: "G-Eazy", password: "password")
graveyard_artist = User.new(username: "Graveyard Artist", password: "password")
justin_townes_earle = User.new(username: "Justin Townes Earle", password: "password+earle")
ladytron = User.new(username: "Ladytron", password: "password")
like_moths_to_flames = User.new(username: "Like Moths to Flames", password: "password+to+flames")
motorama = User.new(username: "Motorama", password: "password")
ocean_jet = User.new(username: "Ocean Jet", password: "password")
pain = User.new(username: "Pain", password: "password+great+pretender.png")
stoned_jesus = User.new(username: "Stoned Jesus", password: "password")
summer_heart = User.new(username: "Summer Heart", password: "password")
summer_of_haze = User.new(username: "Summer Of Haze Artist", password: "password")
the_mynabirds = User.new(username: "The Mynabirds", password: "password+haze+artist")
the_thermals = User.new(username: "The Thermals", password: "password")
vacationer = User.new(username: "Vacationer", password: "password")
wu_lyf = User.new(username: "Wu Lyf", password: "password")

balmorhea.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/balmorhea.jpg"; balmorhea.save
douglas_dare.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/douglas+dare.jpg"; douglas_dare.save
dream_koala.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/dream+koala.jpg"; dream_koala.save
florrie.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/florrie.jpg"; florrie.save
g_eazy.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/g-eazy.jpg"; g_eazy.save
graveyard_artist.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/graveyard+artist.jpg"; graveyard_artist.save
justin_townes_earle.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/justin+townes+earle.jpg"; justin_townes_earle.save
ladytron.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/Ladytron.jpg"; ladytron.save
like_moths_to_flames.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/like+moths+to+flames.jpg"; like_moths_to_flames.save
motorama.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/motorama.jpg"; motorama.save
ocean_jet.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/ocean+jet.jpg"; ocean_jet.save
pain.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/pain+the+great+pretender.png"; pain.save
stoned_jesus.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/pain.jpg"; stoned_jesus.save
summer_heart.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/stoned+jesus.jpg"; summer_heart.save
summer_of_haze.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/summer+heart.jpg"; summer_of_haze.save
the_mynabirds.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/summer+of+haze+artist.jpg"; the_mynabirds.save
the_thermals.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/the+mynabirds.jpg"; the_thermals.save
vacationer.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/the+thermals.jpg"; vacationer.save
wu_lyf.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/vacationer.jpg"; wu_lyf.save
