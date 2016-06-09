var ServerActions = require('../actions/server_actions');
var ErrorActions = require('../actions/error_actions');


module.exports = {
  fetchSongs: function (filter) {
    // var filterParam = {filter: filter ? filter : {}};
    $.ajax({
      url: "api/songs",
      data: {filter: filter},
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

  createSong: function (formData, callback) {
    $.ajax({
      url: "api/songs",
      type: "POST",
      dataType: 'json',
      contentType: false,
      processData: false,
      data: formData,
      success: function (song) {
        ServerActions.receiveSong(song);
        callback(song);
      },
      error: function (xhr) {
        console.log('SongApiUtil#createSong error');
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("upload", errors);
      }
    });
  },

  updateSong: function (formData, callback, id) {
    $.ajax({
      url: "api/songs/" + id,
      type: "PATCH",
      dataType: 'json',
      contentType: false,
      processData: false,
      data: formData,
      success: function (song) {
        ServerActions.receiveSong(song);
        callback(song);
      },
      error: function (xhr) {
        console.log('SongApiUtil#updateSong error');
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("edit", errors);
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
