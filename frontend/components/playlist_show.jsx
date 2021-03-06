var React = require('react');
var Link = require('react-router').Link;
var PlaylistStore = require('./../stores/playlist_store');
var ClientActions = require('../actions/client_actions');

var PlaylistIndexItem = require('./playlists/index_item');
var SongIndexItem = require('./playlists/song_index_item');

var Sidebar = require('./sidebar');

module.exports = React.createClass({
  getInitialState: function () {
    var potPlaylist = PlaylistStore.find(this.props.params.playlistId);
    return({ playlist: potPlaylist ? potPlaylist : {} });
  },

  componentDidMount: function () {
    this.playlistListener = PlaylistStore.addListener(this.setPlaylist);
    ClientActions.getPlaylist(parseInt(this.props.params.playlistId));
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.params.playlistId !== this.props.params.playlistId) {
      ClientActions.getPlaylist(parseInt(newProps.params.playlistId));
    }
  },

  componentWillUnmount: function () {
    this.playlistListener.remove();
  },

  setPlaylist: function () {
    var playlist = PlaylistStore.find(this.props.params.playlistId);
    this.setState({ playlist: playlist });
  },


  render: function () {
    var playlist = this.state.playlist;
    var playlistSongs = playlist.songs || [];
    var divStyle;
    if (playlist.user_img) {
      divStyle = {
        backgroundImage: 'url(' + playlist.user_img + ')'
      };
    }

    return (
      <div>
        <PlaylistIndexItem playlist={playlist} playlistShow={true}/>
        <div className="song-content">
          <div className="about-main group">
            <div className="about-left">
              <Link to={playlist.user_id + '/' + playlist.user}>
                <div className="about-img thumbnail circular" style={divStyle} />
              </Link>
              <Link to={playlist.user_id + '/' + playlist.user} >{playlist.user}</Link>
            </div>
            <div className="about-right">
              {playlist.description}
              <ul>
                {
                  playlistSongs.map(function (song, index) {
                    return (<SongIndexItem key={song.id} index={index + 1} song={song} />);
                  })
                }
              </ul>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
});
