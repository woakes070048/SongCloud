var SongApiUtil = require('../util/song_api_util');
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

  getUser: function(id) {
    UserApiUtil.getUser(id);
  }
};
