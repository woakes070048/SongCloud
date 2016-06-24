var React = require('react');
var Link = require('react-router').Link;
var PlayerFooterStore = require('../../stores/player_footer_store');
var PlayerFooterActions = require('../../actions/player_footer_actions');
var ClientActions = require('../../actions/client_actions');
var SessionStore = require('../../stores/session_store');

var SongIndexItem = require('../songs/index_item');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  // getInitialState: function () {
  //   var init = (PlayerFooterStore.song() && PlayerFooterStore.song().id === this.props.song.id) ? PlayerFooterStore.playState() : false;
  //   var currentId = SessionStore.currentUser() ? SessionStore.currentUser().id : null;
  //   return({ playState: init, currentUserId: currentId });
  // },
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
    // var song = this.props.song;
    // var playButtonState = 'player-button-' + !this.state.playState;
    // var songLink = song.user_id + '/' + song.artist + '/' + song.id + '/' + song.title;
    //
    // var divStyle;
    // if (song.image_url) {
    //   divStyle = {
    //     backgroundImage: 'url(' + song.image_url + ')'
    //   };
    // }

    // var songActions;
    //
    // if (this.isCurrentUser()) {
    //   songActions = (
    //     <div>
    //       <button className="interactive song-button" onClick={this.editSong} title="Edit">Edit</button>
    //       <button className="interactive song-button" onClick={this.deleteSong} title="Delete">Delete</button>
    //     </div>
    //   );
    // }

    // var regular = (
    //   <li className="song-index-item">
    //     <Link to={songLink}>
    //       <div className="song-index-img" style={divStyle} />
    //     </Link>
    //
    //     <div className="song-index-header">
    //       <div className="song-index-button-and-info">
    //         <div className="song-index-play interactive">
    //           <div className={ playButtonState } onClick={this.toggleStore} />
    //         </div>
    //         <div className="song-index-info">
    //           <Link to={song.user_id + '/' + song.artist} className="song-index-artist">{song.artist}</Link>
    //           <Link to={songLink} className="song-index-title">{song.title}</Link>
    //         </div>
    //       </div>
    //       <div className="progress-bar">
    //
    //       </div>
    //       <div className="song-actions">
    //         {songActions}
    //       </div>
    //     </div>
    //   </li>
    // );

    // var songShow = (
    //   <div className="song-show-header group">
    //     <div className="song-show-button-and-info">
    //       <div className="song-index-play big-play interactive">
    //         <div className={ playButtonState  + ' big-play' } onClick={this.toggleStore} />
    //       </div>
    //       <div className="song-show-info">
    //         <div className="info-top">
    //           <Link to={song.user_id + '/' + song.artist} className="profile-info-small">{song.artist}</Link>
    //         </div>
    //         <h2 className="profile-info" >{song.title}</h2>
    //         <div className="song-actions">
    //           {songActions}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="thumbnail" style={divStyle}/>
    //   </div>
    // );

    // var renderingCode = this.props.songShow ? songShow : regular;

    return (
      <div>
        <li>
          <ul>
            {
              this.props.playlist.songs.map(function (song) {
                return (<SongIndexItem key={song.id} song={song} />);
              })
            }
          </ul>
        </li>
      </div>
    );
  }
});
