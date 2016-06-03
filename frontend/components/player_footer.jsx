var React = require('react');
var PlayerFooterStore = require('../stores/player_footer_store');
var PlayerFooterActions = require('../actions/player_footer_actions');

module.exports = React.createClass({

  getInitialState: function () {
    return(PlayerFooterStore.params());
  },

  componentDidMount: function () {
    this.playerFooterListener = PlayerFooterStore.addListener(this.togglePlayerState);
  },

  componentWillUnmount: function () {
    this.playerFooterListener.remove();
  },

  togglePlayerState: function () {
    var songParams = PlayerFooterStore.params();
    this.setState(songParams);
    PlayerFooterActions.togglePlayerState(songParams);
  },

  toggleStore: function () {
    if (this.state.song) {
      PlayerFooterActions.toggleButtonState({
        song: this.state.song,
        playState: !this.state.playState
      });
    }
  },

  render: function () {
    var playButtonState = 'player-button-' + !this.state.playState;
    var hiddenPlayer = this.state.song ? "" : "hidden-player";
    return (
      <div className={"player-footer " + hiddenPlayer}>
        <div className="w-container">
          <div className={ "song-index-play interactive fake-player " }>
            <div className={ playButtonState } onClick={this.toggleStore} />
          </div>
          <audio id="player-footer" src="" controls />
        </div>
      </div>
    );
  }
});
