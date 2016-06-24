var Store = require('flux/utils').Store;
var PlaylistConstants = require('../constants/playlist_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var PlaylistStore = new Store(AppDispatcher);

var _playlists = {};

var resetPlaylists = function (playlists) {
  _playlists = {};

  playlists.forEach(function (playlist) {
    _playlists[playlist.id] = playlist;
  });
};

var setPlaylist = function (playlist) {
  _playlists[playlist.id] = playlist;
};

var removePlaylist = function (playlist) {
  delete _playlists[playlist.id];
};

PlaylistStore.all = function (filter) {
  var playlists = [];
  Object.keys(_playlists).forEach(function (playlistId) {
    var playlist = _playlists[playlistId];
    if (!filter) {
      playlists.push(playlist);
    } else if (filter.user_id) {
      if (filter.user_id === playlist.user_id) {
        playlists.push(playlist);
      }
    }
  });
  return playlists;
};

PlaylistStore.find = function (id) {
  return _playlists[id];
};


PlaylistStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PlaylistConstants.PLAYLISTS_RECEIVED:
      resetPlaylists(payload.playlists);
      this.__emitChange();
      break;
    case PlaylistConstants.PLAYLIST_RECEIVED:
      setPlaylist(payload.playlist);
      this.__emitChange();
      break;
    case PlaylistConstants.PLAYLIST_REMOVED:
      removePlaylist(payload.playlist);
      this.__emitChange();
      break;
  }
};

module.exports = PlaylistStore;
window.PlaylistStore = PlaylistStore;
