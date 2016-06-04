var SessionActions = require('./../actions/session_actions');
var ErrorActions = require('./../actions/error_actions');
var ServerActions = require('./../actions/server_actions');


var UserApiUtil = {
  signup: function (formData) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: {user: formData},
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        console.log('UserApiUtil#createAccount error');
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
        console.log('UserApiUtil#getUser error');
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("getuser", errors);
      }
    });
  },
};

module.exports = UserApiUtil;
