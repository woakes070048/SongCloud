var AppDispatcher = require('../dispatcher/dispatcher');
var SongConstants = require('../constants/song_constants');
var UserConstants = require('../constants/user_constants');

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

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  }
};
