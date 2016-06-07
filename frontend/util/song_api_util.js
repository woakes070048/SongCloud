var ServerActions = require('../actions/server_actions');

module.exports = {
  fetchSongs: function (filter) {
    $.ajax({
      url: "api/songs",
      data: filter,
      success: function (songs) {
        ServerActions.receiveAll(songs);
      }
    });
  },

  getSong: function (id) {
    $.ajax({
      url: "api/songs/" + id.toString(),
      success: function (song) {
        ServerActions.receiveSong(song);
      }
    });
  },

  createSong: function (data) {
    $.ajax({
      url: "api/songs",
      type: "POST",
      data: { song: data },
      success: function (song) {
        ServerActions.receiveSong(song);
      }
    });
  },

  updateSong: function (data) {
    $.ajax({
      url: "api/songs/" + data.id,
      type: "PATCH",
      data: { song: { title: data.title, body: data.body } },
      success: function (song) {
        ServerActions.receiveSong(song);
      }
    });
  },

  deleteSong: function (id) {
    $.ajax({
      url: "api/songs/" + id,
      type: "DELETE",
      success: function (song) {
        ServerActions.removeSong(song);
      }
    });
  }
};
