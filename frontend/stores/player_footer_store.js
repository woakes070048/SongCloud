var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var PlayerFooterConstants = require('../constants/player_footer_constants');

var PlayerFooterStore = new Store(AppDispatcher);
var _params = { song: {}, playState: false, playFrom: null };

PlayerFooterStore.params = function () {
  return Object.assign({}, _params);
};

PlayerFooterStore.song = function () {
  return _params.song;
};

PlayerFooterStore.playState = function () {
  return _params.playState;
};


PlayerFooterStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case PlayerFooterConstants.TOGGLE_BUTTON_STATE:
      _params = payload.songParams;
      this.__emitChange();
      break;
    case PlayerFooterConstants.UPDATE_PLAY_FROM:
      _params.playFrom = payload.playFrom;
      this.__emitChange();
      break;
  }
};

module.exports = PlayerFooterStore;
