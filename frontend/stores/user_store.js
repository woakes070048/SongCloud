var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var UserStore = new Store(AppDispatcher);

var _user;

UserStore.user = function () {
  return _user;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
      _user = payload.user;
      this.__emitChange();
      break;
  }
};

module.exports = UserStore;
