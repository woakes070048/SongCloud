var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var SongConstants = require('../constants/song_constants');
var PlaylistConstants = require('../constants/playlist_constants');

module.exports = {
  receiveAll: function (songs) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONGS_RECEIVED,
      songs: songs
    });
  },

  receiveSong: function (song) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONG_RECEIVED,
      song: song
    });
  },

  removeSong: function (song) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONG_REMOVED,
      song: song
    });
  },

  receivePlaylists: function (playlists) {
    AppDispatcher.dispatch({
      actionType: PlaylistConstants.PLAYLISTS_RECEIVED,
      playlists: playlists
    });
  },

  receiveUserPlaylists: function (playlists) {
    AppDispatcher.dispatch({
      actionType: PlaylistConstants.PLAYLISTS_RECEIVED,
      playlists: playlists
    });
  },

  receivePlaylist: function (playlist) {
    AppDispatcher.dispatch({
      actionType: PlaylistConstants.PLAYLIST_RECEIVED,
      playlist: playlist
    });
  },

  removePlaylist: function (playlist) {
    AppDispatcher.dispatch({
      actionType: PlaylistConstants.PLAYLIST_REMOVED,
      playlist: playlist
    });
  },

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  }
};
