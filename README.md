# SongCloud

[SongCloud Live][heroku]

[heroku]: http://songcloud.herokuapp.com

SongCloud is a clone of SoundCloud. It utilizes Ruby on Rails on the backend and React/Flux on the frontend.

## Features and Implentation

SongCloud allows a user to play songs continuously while allowing them to navigate through other parts of the website. This is possible because it utilizes React/Flux to make it a single page app.

- This app allows users to upload, edit, delete, and view/play songs.
- Stores information about songs and users in Postgres database.
- All image/audio content is uploaded/accessed using Amazon Web Services.
- The Rails backend properly fetches/stores json data into the database.

### Song List Item

A song list item corresponds to a song. It holds all the song's info and includes buttons to navigate/edit/delete. Multiple items can be shown on one page and the same item can be shown on different pages. If a specific song is playing, everywhere it is shown has to be updated (especially important ).

#### Implementation

##### `toggleButtonState`

Compares all the index items anywhere in the app to the song item in the player in the footer. If it is the same song, it will render to the same play/pause button state; if it's not the same song, it will render the pause button image.

```javascript
toggleButtonState: function () {
  if (PlayerFooterStore.song().id === this.props.song.id) {
    this.setState({playState: PlayerFooterStore.playState()});
  } else if (this.state.playState === true) {
    this.setState({playState: false});
  }
},
```

##### `toggleStore`

When the button in the index item is pressed, it updates the "song store" that holds information of the currently playing song.

```javascript
toggleStore: function () {
  PlayerFooterActions.toggleButtonState({
    song: this.props.song,
    playState: !this.state.playState
  });
},
```

### Player

The Player (in the footer) has the controls for the currently playing song. When it is pressed it should change the play/pause button state of the song everywhere it is shown.

#### Implementation

##### `togglePlayerState`

The Player gets information from the "song store" about the currently playing song. It then sends invokes the action to play the actual song.

```javascript
togglePlayerState: function () {
  var songParams = PlayerFooterStore.params();
  this.setState(songParams);
  PlayerFooterActions.togglePlayerState(songParams);
},
```

##### `toggleStore`

Similar to the index item, when the button in the player is pressed, it updates the "song store" that holds information of the currently playing song.

```javascript
toggleStore: function () {
  PlayerFooterActions.toggleButtonState({
    song: this.props.song,
    playState: !this.state.playState
  });
},
```

## Pages

### Index Page

Displays all songs by all users. In the future I want to implement displaying only songs users follow or like and displaying top played songs.

#### Screenshot
![songcloud-index]

### Artist Page

Displays all songs by a user.

#### Screenshot
![songcloud-artist]

### Song Page

Displays a song and its information. In the future I plan on adding comments.

#### Screenshot
![songcloud-song]

### Signin/Signup Page

Allows user to sign in with Google or create an account by entering username and password.

#### Screenshots
![songcloud-signup]

![songcloud-signin]

### Upload/Update Page

Allows user to upload/update a song. A song has a title, description, and image/song (which they upload).

#### Screenshots
![songcloud-upload]

![songcloud-update]

[songcloud-index]: ./docs/screenshots/SongCloud.png
[songcloud-artist]: ./docs/screenshots/SongCloud-artist.png
[songcloud-song]: ./docs/screenshots/SongCloud-song.png
[songcloud-signin]: ./docs/screenshots/SongCloud-signin.png
[songcloud-signup]: ./docs/screenshots/SongCloud-signup.png
[songcloud-upload]: ./docs/screenshots/SongCloud-upload.png
[songcloud-update]: ./docs/screenshots/SongCloud-update.png
