var React = require('react');
var Link = require('react-router').Link;
var PlayerFooterStore = require('../../stores/player_footer_store');
var PlayerFooterActions = require('../../actions/player_footer_actions');
var ClientActions = require('../../actions/client_actions');
var SessionStore = require('../../stores/session_store');

var SongIndexItem = require('./song_index_item');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    // var init = (PlayerFooterStore.song() && PlayerFooterStore.song().id === this.props.song.id) ? PlayerFooterStore.playState() : false;
    var init = false;
    var currentId = SessionStore.currentUser() ? SessionStore.currentUser().id : null;
    return({ playState: init, currentUserId: currentId });
  },
  //
  // editSong: function (event) {
  //   if (this.isCurrentUser()) {
  //     event.preventDefault();
  //     var url = this.props.song.user_id + '/' + this.props.song.artist + '/' + this.props.song.id + '/' + this.props.song.title + "/edit";
  //     this.context.router.push(url);
  //   }
  // },
  //
  // deleteSong: function (event) {
  //   if (this.isCurrentUser()) {
  //     event.preventDefault();
  //     ClientActions.deleteSong(this.props.song.id);
  //   }
  // },
  //
  // isCurrentUser: function () {
  //   return this.state.currentUserId === this.props.song.user_id;
  // },
  //
  // componentDidMount: function () {
  //   this.playerFooterListener = PlayerFooterStore.addListener(this.toggleButtonState);
  //   this.sessionListener = SessionStore.addListener(this.updateCurrentUser);
  // },
  //
  // updateCurrentUser: function () {
  //   var currentUser = SessionStore.currentUser();
  //   this.setState({currentUserId: currentUser ? currentUser.id : null});
  // },
  //
  // componentWillUnmount: function () {
  //   this.playerFooterListener.remove();
  //   this.sessionListener.remove();
  // },
  //
  // toggleButtonState: function () {
  //   if (PlayerFooterStore.song().id === this.props.song.id) {
  //     this.setState({playState: PlayerFooterStore.playState()});
  //   } else if (this.state.playState === true) {
  //     this.setState({playState: false});
  //   }
  // },
  //
  // toggleStore: function () {
  //   PlayerFooterActions.toggleButtonState({
  //     song: this.props.song,
  //     playState: !this.state.playState
  //   });
  // },

  render: function () {
    var playlist = this.props.playlist;
    var playlistSongs = playlist.songs || [];
    var playButtonState = 'player-button-' + !this.state.playState;
    var playlistLink = playlist.user_id + '/' + playlist.user + '/playlists/' + playlist.id + '/' + playlist.title;

    var divStyle;
    if (playlist.image_url) {
      divStyle = {
        backgroundImage: 'url(' + playlist.image_url + ')'
      };
    }

    var regular = (
      <li>
        <Link to={playlistLink}>
          <div className="song-index-img" style={divStyle} />
        </Link>
        <ul>
          {
            playlistSongs.map(function (song, index) {
              return (<SongIndexItem key={song.id} index={index + 1} song={song} />);
            })
          }
        </ul>
      </li>
    );

    var playlistShow = (
      <div className="song-show-header group">
        <div className="song-show-button-and-info">
          <div className="song-index-play big-play interactive">
            <div className={ playButtonState } onClick={this.toggleStore} />
          </div>
          <div className="song-show-info">
            <div className="info-top">
              <Link to={playlist.user_id + '/' + playlist.user} className="profile-info-small">{playlist.user}</Link>
            </div>
            <h2 className="profile-info" >{playlist.title}</h2>
          </div>
        </div>
        <div className="thumbnail" style={divStyle}/>
      </div>
    );

    var renderingCode = this.props.playlistShow ? playlistShow : regular;

    return (
      <div>
        {renderingCode}
      </div>
    );
  }
});
