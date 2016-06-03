var React = require('react');
var PlayerFooterStore = require('../stores/player_footer_store');
var PlayerFooterActions = require('../actions/player_footer_actions');

module.exports = React.createClass({

  componentDidMount: function () {
    this.playerFooterListener = PlayerFooterStore.addListener(this.togglePlayerState);
  },

  componentWillUnmount: function () {
    this.playerFooterListener.remove();
  },

  togglePlayerState: function () {
    var songParams = PlayerFooterStore.params();
    PlayerFooterActions.togglePlayerState(songParams);
  },

  render: function () {
    return (
      <div className="player-footer">
        <div className="w-container">
          <audio id="player-footer" src="" controls />
        </div>
      </div>
    );
  }
});
