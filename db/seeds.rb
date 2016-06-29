# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([#{ name: 'Chicago' }, #{ name: 'Copenhagen' }])
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
justin_townes_earle = User.new(username: "Justin Townes Earle", password: "password")
ladytron = User.new(username: "Ladytron", password: "password")
like_moths_to_flames = User.new(username: "Like Moths to Flames", password: "password")
motorama = User.new(username: "Motorama", password: "password")
ocean_jet = User.new(username: "Ocean Jet", password: "password")
pain = User.new(username: "Pain", password: "password")
stoned_jesus = User.new(username: "Stoned Jesus", password: "password")
summer_heart = User.new(username: "Summer Heart", password: "password")
summer_of_haze = User.new(username: "Summer Of Haze", password: "password")
the_mynabirds = User.new(username: "The Mynabirds", password: "password")
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
pain.image = "https://s3.amazonaws.com/songcloud-pro/users/seeds/images/artist/pain.jpg"); pain.save
stoned_jesus.image = "https://s3.amazonaws.com/songcloud-pro/users/seeds/images/artist/stoned+jesus.jpg"); stoned_jesus.save
summer_heart.image = "https://s3.amazonaws.com/songcloud-pro/users/seeds/images/artist/summer+heart.jpg"); summer_heart.save
summer_of_haze.image = "https://s3.amazonaws.com/songcloud-pro/users/seeds/images/artist/summer+of+haze+artist.jpg"); summer_of_haze.save
the_mynabirds.image = "https://s3.amazonaws.com/songcloud-pro/users/seeds/images/artist/the+mynabirds.jpg"); the_mynabirds.save
the_thermals.image = "https://s3.amazonaws.com/songcloud-pro/users/seeds/images/artist/the+thermals.jpg"); the_thermals.save
vacationer.image = "https://s3.amazonaws.com/songcloud-pro/users/seeds/images/artist/vacationer.jpg"); vacationer.save
wu_lyf.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/artist/wu+lyf.jpg"); wu_lyf.save


song1 = Song.new(title: "If You Only Knew The Rain", user_id: balmorhea.id)
song2 = Song.new(title: "Swim", user_id: douglas_dare.id)
song3 = Song.new(title: "We Can't Be Friends", user_id: dream_koala.id)
song4 = Song.new(title: "Call Of The Wild", user_id: florrie.id)
song5 = Song.new(title: "Give Me Your Love", user_id: florrie.id)
song6 = Song.new(title: "Left Too Late", user_id: florrie.id)
song7 = Song.new(title: "Summer Nights", user_id: florrie.id)
song8 = Song.new(title: "Breathe", user_id: g_eazy.id)
song9 = Song.new(title: "Hello", user_id: g_eazy.id)
song10 = Song.new(title: "Lady Killers (feat. Hoodie Allen)", user_id: g_eazy.id)
song11 = Song.new(title: "Mad (Feat. Devon Baldwin)", user_id: g_eazy.id)
song12 = Song.new(title: "Marilyn (Feat. Dominique Le Jeune)", user_id: g_eazy.id)
song13 = Song.new(title: "Plastic Dreams (feat. Johanna Fay)", user_id: g_eazy.id)
song14 = Song.new(title: "Stay High (Feat. Mod Sun)", user_id: g_eazy.id)
song15 = Song.new(title: "Evil Ways", user_id: graveyard_artist.id)
song16 = Song.new(title: "Harlem River Blues", user_id: justin_townes_earle.id)
song17 = Song.new(title: "Gravity The Seducer", user_id: ladytron.id)
song18 = Song.new(title: "You Won't Be Missed", user_id: like_moths_to_flames.id)
song19 = Song.new(title: "Alps", user_id: motorama.id)
song20 = Song.new(title: "Compass", user_id: motorama.id)
song21 = Song.new(title: "Ghost", user_id: motorama.id)
song22 = Song.new(title: "Letter Home", user_id: motorama.id)
song23 = Song.new(title: "Normandy", user_id: motorama.id)
song24 = Song.new(title: "Northern Seaside", user_id: motorama.id)
song25 = Song.new(title: "Ship", user_id: motorama.id)
song26 = Song.new(title: "Warm Eyelids", user_id: motorama.id)
song27 = Song.new(title: "Wind In Her Hair", user_id: motorama.id)
song28 = Song.new(title: "Anchor", user_id: motorama.id)
song29 = Song.new(title: "Distant", user_id: ocean_jet.id)
song30 = Song.new(title: "The Great Pretender", user_id: pain.id)
song31 = Song.new(title: "Indian", user_id: stoned_jesus.id)
song32 = Song.new(title: "Stormy Monday", user_id: stoned_jesus.id)
song33 = Song.new(title: "Please Stay", user_id: summer_heart.id)
song34 = Song.new(title: "Pussy Juice", user_id: summer_of_haze.id)
song35 = Song.new(title: "Body Of Work", user_id: the_mynabirds.id)
song36 = Song.new(title: "Now We Can See", user_id: the_thermals.id)
song37 = Song.new(title: "Trip", user_id: vacationer.id)
song38 = Song.new(title: "Dirt", user_id: wu_lyf.id)

song1.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/balmorhea.jpeg"; song1.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Balmorhea+-+balmorhea+-+If+You+Only+Knew+The+Rain.mp3"; song1.save
song2.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/douglas+dare+whelm.jpeg"; song2.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Douglas+Dare+-+Swim.mp3"; song2.save
song3.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/dream+koala+untitle+album.jpeg"; song3.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Dream+Koala+-+We+Can%27t+Be+Friends.mp3"; song3.save
song4.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/florrie+-+introduction.png"; song4.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Florrie+-+Call+of+the+Wild.mp3"; song4.save
song5.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/florrie+-+introduction.png"; song5.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Florrie+-+Give+Me+Your+Love.mp3"; song5.save
song6.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/florrie+-+introduction.png"; song6.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Florrie+-+Left+Too+Late.mp3"; song6.save
song7.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/florrie+-+introduction.png"; song7.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Florrie+-+Summer+Nights.mp3"; song7.save
song8.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/g-eazy+must+be+nice.jpg"; song8.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/G-Eazy+-+Breathe.mp3"; song8.save
song9.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/g-eazy+must+be+nice.jpg"; song9.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/G-Eazy+-+Hello.mp3"; song9.save
song10.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/g-eazy+must+be+nice.jpg"; song10.file = %Q{https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/G-Eazy+-+Lady+Killers+(feat.+Hoodie+Allen).mp3}; song10.save
song11.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/g-eazy+must+be+nice.jpg"; song11.file = %Q{https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/G-Eazy+-+Mad+(feat.+Devon+Baldwin).mp3}; song11.save
song12.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/g-eazy+must+be+nice.jpg"; song12.file = %Q{https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/G-Eazy+-+Marilyn+(feat.+Dominique+Le+Jeune).mp3}; song12.save
song13.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/g-eazy+must+be+nice.jpg"; song13.file = %Q{https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/G-Eazy+-+Plastic+Dreams+(feat.+Johanna+Fay).mp3}; song13.save
song14.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/g-eazy+must+be+nice.jpg"; song14.file = %Q{https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/G-Eazy+-+Stay+High+(feat.+Mod+Sun).mp3}; song14.save
song15.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/graveyard.jpeg"; song15.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Graveyard+-+Evil+Ways.mp3"; song15.save
song16.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/justin+townes+earle+-+harlem+river+blues.jpeg"; song16.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Justin+Townes+Earle+-+Harlem+River+Blues.mp3"; song16.save
song17.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/ladytron+gravity+the+seducer.jpg"; song17.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Ladytron+-+White+Elephant+-+gravity+the+seducer.mp3"; song17.save
song18.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/like+moths+to+flames+-+you+wont+be+missed.jpg"; song18.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Like+Moths+to+Flames+-+You+Won%27t+Be+Missed.mp3"; song18.save
song19.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+alps.png"; song19.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Alps.mp3"; song19.save
song20.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+alps.png"; song20.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Compass.mp3"; song20.save
song21.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+alps.png"; song21.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Ghost.mp3"; song21.save
song22.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+alps.png"; song22.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Letter+Home.mp3"; song22.save
song23.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+alps.png"; song23.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Normandy.mp3"; song23.save
song24.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+alps.png"; song24.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Northern+Seaside.mp3"; song24.save
song25.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+alps.png"; song25.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Ship.mp3"; song25.save
song26.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+alps.png"; song26.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Warm+Eyelids.mp3"; song26.save
song27.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+alps.png"; song27.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Wind+in+Her+Hair.mp3"; song27.save
song28.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/motorama+horse.jpeg"; song28.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Motorama+-+Anchor.mp3"; song28.save
song29.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/ocean+jet+distant.jpeg"; song29.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Ocean+Jet+-+Distant.mp3"; song29.save
song30.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/pain+the+great+pretender.png"; song30.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Pain+-+The+Great+Pretender.mp3"; song30.save
song31.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/stoned+jesus+seven+thunders+roar+album.png"; song31.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Stoned+Jesus+-+Indian.mp3"; song31.save
song32.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/stoned+jesus+seven+thunders+roar+album.png"; song32.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Stoned+Jesus+-+Stormy+Monday.mp3"; song32.save
song33.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/summer+heart+-+please+stay+album.jpeg"; song33.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Summer+Heart+-+Please+Stay.mp3"; song33.save
song34.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/summer+of+haze.jpeg"; song34.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/Summer+of+Haze+-+Pussy+Juice.mp3"; song34.save
song35.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/the+mynabirds+generals.jpeg"; song35.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/The+Mynabirds+-+Body+of+Work.mp3"; song35.save
song36.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/thermals+now+we+can+see.jpg"; song36.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/The+Thermals+-+Now+We+Can+See.mp3"; song36.save
song37.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/vacationer+gone.jpeg"; song37.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/VACATIONER+-+Trip.mp3"; song37.save
song38.image = "https://s3.amazonaws.com/songcloud-dev/users/seeds/images/album/wu+lyf+go+tell+fire+to+the+mountain.jpg"; song38.file = "https://s3.amazonaws.com/songcloud-dev/users/seeds/songs/WU+LYF+-+Dirt.mp3"; song38.save
