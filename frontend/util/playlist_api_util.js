var ServerActions = require('../actions/server_actions');
var ErrorActions = require('../actions/error_actions');

module.exports = {
  fetchPlaylists: function (filter) {
    $.ajax({
      url: "api/playlists",
      data: {filter: filter},
      success: function (playlists) {
        ServerActions.receivePlaylists(playlists);
      }
    });
  },

  fetchUserPlaylists: function (userId) {
    $.ajax({
      url: "api/users/" + userId + "playlists",
      success: function (playlists) {
        ServerActions.receivePlaylists(playlists);
      }
    });
  },

  getPlaylist: function (id) {
    $.ajax({
      url: "api/playlists/" + id.toString(),
      success: function (playlist) {
        ServerActions.receivePlaylist(playlist);
      }
    });
  },

  createPlaylist: function (formData, callback) {
    $.ajax({
      url: "api/playlists",
      type: "POST",
      dataType: 'json',
      contentType: false,
      processData: false,
      data: formData,
      success: function (playlist) {
        ServerActions.receivePlaylist(playlist);
        callback(playlist);
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("upload", errors);
      }
    });
  },

  updatePlaylist: function (formData, callback, id) {
    $.ajax({
      url: "api/playlists/" + id,
      type: "PATCH",
      dataType: 'json',
      contentType: false,
      processData: false,
      data: formData,
      success: function (playlist) {
        ServerActions.receivePlaylist(playlist);
        callback(playlist);
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("edit", errors);
      }
    });
  },

  deletePlaylist: function (id) {
    $.ajax({
      url: "api/playlists/" + id,
      type: "DELETE",
      success: function (playlist) {
        ServerActions.removePlaylist(playlist);
      }
    });
  }
};
