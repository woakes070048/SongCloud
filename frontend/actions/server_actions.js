var AppDispatcher = require('../dispatcher/dispatcher');
var SongConstants = require('../constants/song_constants');

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
  }
};
