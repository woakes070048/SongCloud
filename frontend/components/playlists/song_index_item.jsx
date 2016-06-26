var React = require('react');
var Link = require('react-router').Link;
var PlayerFooterStore = require('../../stores/player_footer_store');
var PlayerFooterActions = require('../../actions/player_footer_actions');
var ClientActions = require('../../actions/client_actions');
var SessionStore = require('../../stores/session_store');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    var init = (PlayerFooterStore.song() && PlayerFooterStore.song().id === this.props.song.id) ? PlayerFooterStore.playState() : false;
    var currentId = SessionStore.currentUser() ? SessionStore.currentUser().id : null;
    return({ playState: init, currentUserId: currentId });
  },

  componentDidMount: function () {
    this.playerFooterListener = PlayerFooterStore.addListener(this.toggleButtonState);
  },

  componentWillUnmount: function () {
    this.playerFooterListener.remove();
  },

  toggleButtonState: function () {
    if (PlayerFooterStore.song().id === this.props.song.id) {
      this.setState({playState: PlayerFooterStore.playState()});
    } else if (this.state.playState === true) {
      this.setState({playState: false});
    }
  },

  toggleStore: function (event) {
    if (event.target.tagName !== 'A') {
      PlayerFooterActions.toggleButtonState({
        song: this.props.song,
        playState: !this.state.playState
      });
    }
  },

  render: function () {
    var song = this.props.song;
    var playButtonState = 'player-button-' + !this.state.playState;
    var songPlaying = 'song-playing-' + this.state.playState;
    var songLink = song.user_id + '/' + song.artist + '/' + song.id + '/' + song.title;

    var divStyle;
    if (song.image_url) {
      divStyle = {
        backgroundImage: 'url(' + song.image_url + ')'
      };
    }

    var regular = (
      <li className={"playlist-index-item interactive " + songPlaying} onClick={this.toggleStore}>
        <div className="song-index-img playlist" style={divStyle}>
          <div className="song-index-play playlist">
            <div className={ playButtonState } />
          </div>
        </div>

        <div className="playlist-index-header">
          <div className="playlist-index-button-and-info">
            <div className="playlist-index-info">
              <p className="playlist-index-num">{this.props.index}</p>
              <Link to={song.user_id + '/' + song.artist} className="playlist-song-artist">{song.artist}</Link>
              <span>-</span>
              <Link to={songLink} className="playlist-song-title truncate">{song.title}</Link>
            </div>
          </div>
        </div>
      </li>
    );

    var renderingCode = this.props.songShow ? songShow : regular;

    return (
      <div>
        {renderingCode}
      </div>
    );
  }
});
