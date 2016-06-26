var React = require('react');
var Link = require('react-router').Link;
var PlaylistIndexItem = require('./playlists/index_item');
var PlaylistStore = require('./../stores/playlist_store');
var ClientActions = require('../actions/client_actions');

var SongIndexItem = require('./playlists/song_index_item');

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
    ClientActions.getPlaylist(parseInt(this.props.params.playlistId));
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

        <div className="user-show sidebar">
          <div className="sidebar-footer">
            ©2016
            <a target="_blank" href="https://soundcloud.com"> SoundCloud </a>
            Clone by Eric Moy -
            <a target="_blank" href="https://github.com/EricMoy/PlaylistCloud"> (Github Page)</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
});
