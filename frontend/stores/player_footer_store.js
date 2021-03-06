var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var PlayerFooterConstants = require('../constants/player_footer_constants');

var PlayerFooterStore = new Store(AppDispatcher);
var _params = { song: {}, playState: false, playFrom: null };
var _prev = [];
var _next = [];

PlayerFooterStore.song = function () {
  return _params.song;
};

PlayerFooterStore.playState = function () {
  return _params.playState;
};

PlayerFooterStore.playFrom = function () {
  return _params.playFrom;
};

function handleItemPress(songParams) {
  if (songParams.playState) {
    _next = [];
  }
  if (songParams.song.id !== _params.song.id && Object.keys(_params.song).length > 0) {
    _prev.push(Object.assign({}, _params));
  }
  for (var songParam in songParams) {
    _params[songParam] = songParams[songParam];
  }
}

function playPrev () {
  if (_prev.length > 0) {
    var prevSong = _prev.pop();
    _next.unshift(Object.assign({}, _params));
    _params = prevSong;
  }
  _params.playState = true;
}

function playNext () {
  if (_next.length > 0) {
    var nextSong = _next.shift();
    _prev.push(Object.assign({}, _params));
    _params = nextSong;
  } else if (_params.queue) {
    _params.index += 1;
    if (_params.queue[_params.index]) {
      _prev.push(Object.assign({}, _params));
      _params.song = _params.queue[_params.index];
    }
  }
  _params.playState = true;
}

PlayerFooterStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case PlayerFooterConstants.TOGGLE_BUTTON_STATE:
      handleItemPress(payload.songParams);
      this.__emitChange();
      break;
    case PlayerFooterConstants.PLAY_PREV:
      playPrev();
      this.__emitChange();
      break;
    case PlayerFooterConstants.PLAY_NEXT:
      playNext();
      this.__emitChange();
      break;
  }
};

module.exports = PlayerFooterStore;
