var React = require('react');
var PlayerFooterStore = require('../stores/player_footer_store');
var PlayerFooterActions = require('../actions/player_footer_actions');
var Link = require('react-router').Link;

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
    var song = this.state.song;
    var playButtonState = 'player-button-' + !this.state.playState;
    var hiddenPlayer = "hidden-player";
    var songInfo;
    var songLink;
    var divStyle;
    if (song && song.user_id) {
      hiddenPlayer = "";
      songLink = song.user_id + '/' + song.artist + '/' + song.id + '/' + song.title;
      divStyle = {
        backgroundImage: 'url(' + song.image_url + ')'
      };

      songInfo = (
        <div className="song-info-div group">
          <Link to={songLink}>
            <div className="song-index-img footer-img" style={divStyle} />
          </Link>
          <div className="text-container">
            <Link to={song.user_id + '/' + song.artist} className="footer-playing">{song.artist}</Link>
            <Link to={songLink} className="footer-title">{song.title}</Link>
          </div>
        </div>
      );
    }

    return (
      <div className={"player-footer " + hiddenPlayer}>
        <div className="w-container group">
          <div className="skip-control control-prev" />
          <div className={ "play-control " + playButtonState } onClick={this.toggleStore} />
          <div className="skip-control control-next" />
          <div className="current-song-info">
            {songInfo}
          </div>
          <audio id="player-footer" preload="metadata" />
        </div>
      </div>
    );
  }
});
