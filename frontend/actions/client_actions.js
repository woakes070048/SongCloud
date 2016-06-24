var SongApiUtil = require('../util/song_api_util');
var PlaylistApiUtil = require('../util/playlist_api_util');
var UserApiUtil = require('../util/user_api_util');

module.exports = {
  fetchSongs: function (filter) {
    SongApiUtil.fetchSongs(filter);
  },

  getSong: function (id) {
    SongApiUtil.getSong(id);
  },

  createSong: function (data) {
    SongApiUtil.createSong(data);
  },

  editSong: function (data) {
    SongApiUtil.updateSong(data);
  },

  deleteSong: function (id) {
    SongApiUtil.deleteSong(id);
  },

  fetchPlaylists: function (filter) {
    PlaylistApiUtil.fetchPlaylists(filter);
  },

  getPlaylist: function (id) {
    PlaylistApiUtil.getPlaylist(id);
  },

  createPlaylist: function (data) {
    PlaylistApiUtil.createPlaylist(data);
  },

  editPlaylist: function (data) {
    PlaylistApiUtil.updatePlaylist(data);
  },

  deletePlaylist: function (id) {
    PlaylistApiUtil.deletePlaylist(id);
  },

  getUser: function(id) {
    UserApiUtil.getUser(id);
  }
};
