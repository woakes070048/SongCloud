var Store = require('flux/utils').Store;
var SongConstants = require('../constants/song_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var SongStore = new Store(AppDispatcher);

var _songs = {};

var resetSongs = function (songs) {
  _songs = {};

  songs.forEach(function (song) {
    _songs[song.id] = song;
  });
};

var setSong = function (song) {
  _songs[song.id] = song;
};

var removeSong = function (song) {
  delete _songs[song.id];
};

SongStore.all = function (filter) {
  var songs = [];
  Object.keys(_songs).forEach(function (songId) {
    var song = _songs[songId];
    // if (!filter) {
      songs.push(song);
    // } else if (filter.user_id) {
    //   if (filter.user_id === song.user_id) {
    //     songs.push(song);
    //   }
    // }
  });
  return songs;
};

SongStore.find = function (id) {
  return _songs[id];
};


SongStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SongConstants.SONGS_RECEIVED:
      resetSongs(payload.songs);
      this.__emitChange();
      break;
    case SongConstants.SONG_RECEIVED:
      setSong(payload.song);
      this.__emitChange();
      break;
    case SongConstants.SONG_REMOVED:
      removeSong(payload.song);
      this.__emitChange();
      break;
  }
};

module.exports = SongStore;
window.SongStore = SongStore;
