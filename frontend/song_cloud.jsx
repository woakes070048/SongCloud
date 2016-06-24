//React
var React = require('react');
var ReactDOM = require('react-dom');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
//Components
var App = require('./components/app');
var Charts = require('./components/charts');
var SongsIndex = require('./components/songs/index');
var UserShow = require('./components/user_show');
var UserSongs = require('./components/user_songs');
var UserPlaylists = require('./components/user_playlists');
var SongShow = require('./components/song_show');
var PlaylistShow = require('./components/playlist_show');
var SongForm = require('./components/songs/form');
//Auth
var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');
var LoginForm = require('./components/login_form');

var Router = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Charts } />
      <Route path="charts" component={ Charts } />
      <Route path="login" component={ LoginForm } />
      <Route path="signup" component={ LoginForm } />
      <Route path="upload" component={ SongForm } onEnter={ _ensureLoggedIn }/>
      <Route path=":userId/:username/:songId/:songTitle/edit" component={ SongForm } onEnter={ _ensureLoggedIn }/>
      <Route path=":userId/:username/:songId/:songTitle" component={ SongShow } />
      <Route path=":userId/:username/playlists/:playlistId/:playlistTitle" component={ PlaylistShow } />
      <Route path=":userId/:username" component={ UserShow } >
        <IndexRoute component={ UserSongs } />
        <Route path="songs" component={ UserSongs } />
        <Route path="playlists" component={ UserPlaylists } />
      </Route>
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn() {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }

    asyncDoneCallback();
  }
}

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
