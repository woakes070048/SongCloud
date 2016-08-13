var AppDispatcher = require('../dispatcher/dispatcher');
var PlayerFooterConstants = require('../constants/player_footer_constants');

var PlayerFooterActions = {
  toggleButtonState: function (songParams) {
    AppDispatcher.dispatch({
      actionType: PlayerFooterConstants.TOGGLE_BUTTON_STATE,
      songParams: songParams
    });
  },

  updatePlayFrom: function (playFrom) {
    AppDispatcher.dispatch({
      actionType: PlayerFooterConstants.UPDATE_PLAY_FROM,
      playFrom: playFrom
    });
  },

  togglePlayerState: function (songParams) {
    var footerPlayer = document.getElementById('player-footer');
    if (footerPlayer.src !== songParams.song.file_url) {
      footerPlayer.src = songParams.song.file_url;
    }

    setTimeout(function(){
      switch(songParams.playState) {
        case false:
        footerPlayer.pause();
        break;
        case true:
        footerPlayer.play();
        break;
      }
    }, 0);
  },

  playPrev: function () {
    AppDispatcher.dispatch({
      actionType: PlayerFooterConstants.PLAY_PREV,
    });
  },

  playNext: function () {
    AppDispatcher.dispatch({
      actionType: PlayerFooterConstants.PLAY_NEXT,
    });
  },
};

module.exports = PlayerFooterActions;
