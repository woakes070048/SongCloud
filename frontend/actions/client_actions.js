var ApiUtil = require('../util/song_api_util');

module.exports = {
  fetchSongs: function () {
    ApiUtil.fetchSongs();
  },

  getSong: function (id) {
    ApiUtil.getSong(id);
  },

  createSong: function (data) {
    ApiUtil.createSong(data);
  },

  editSong: function (data) {
    ApiUtil.updateSong(data);
  },

  deleteSong: function (id) {
    ApiUtil.deleteSong(id);
  }
};

window.ApiUtil = ApiUtil;
