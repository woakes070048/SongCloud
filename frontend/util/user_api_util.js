var SessionActions = require('./../actions/session_actions');
var ErrorActions = require('./../actions/error_actions');
var ServerActions = require('./../actions/server_actions');


var UserApiUtil = {
  signup: function (formData) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      contentType: false,
      processData: false,
      data: formData,
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("signup", errors);
      }
    });
  },

  getUser: function (id) {
    $.ajax({
      url: '/api/users/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (user) {
        ServerActions.receiveUser(user);
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("getuser", errors);
      }
    });
  },
};

module.exports = UserApiUtil;
