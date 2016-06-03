var AppDispatcher = require('../dispatcher/dispatcher');
var PlayerFooterConstants = require('../constants/player_footer_constants');

var PlayerFooterActions = {
  toggleButtonState: function (songParams) {
    AppDispatcher.dispatch({
      actionType: PlayerFooterConstants.TOGGLE_BUTTON_STATE,
      songParams: songParams
    });
  },

  togglePlayerState: function (songParams) {
    var footerPlayer = document.getElementById('player-footer');
    if (footerPlayer.src !== songParams.song.file_url) {
      footerPlayer.src = songParams.song.file_url;
    }
    switch(songParams.playState) {
      case false:
        footerPlayer.pause();
        break;
      case true:
        footerPlayer.play();
        break;
    }
  }
};

module.exports = PlayerFooterActions;
