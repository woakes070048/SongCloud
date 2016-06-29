var React = require('react');
var Link = require('react-router').Link;
var SongStore = require('./../stores/song_store');
var ClientActions = require('../actions/client_actions');

var SongIndexItem = require('./songs/index_item');

var Sidebar = require('./sidebar');

module.exports = React.createClass({
  getInitialState: function () {
    var potSong = SongStore.find(this.props.params.songId);
    return({ song: potSong ? potSong : {} });
  },

  componentDidMount: function () {
    this.songListener = SongStore.addListener(this.setSong);
    ClientActions.getSong(parseInt(this.props.params.songId));
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.params.songId !== this.props.params.songId) {
      ClientActions.getSong(parseInt(newProps.params.songId));
    }
  },

  componentWillUnmount: function () {
    this.songListener.remove();
  },

  setSong: function () {
    var song = SongStore.find(this.props.params.songId);
    this.setState({ song: song });
  },

  render: function () {
    var song = this.state.song;
    var divStyle;
    var songItem;
    if (song.artist_img) {
      divStyle = {
        backgroundImage: 'url(' + song.artist_img + ')'
      };
      songItem = <SongIndexItem song={song} songShow={true}/>;
    }

    return (
      <div>
        {songItem}
        <div className="song-content">
          <div className="about-main group">
            <div className="about-left">
              <Link to={song.user_id + '/' + song.artist}>
                <div className="about-img thumbnail circular" style={divStyle} />
              </Link>
              <Link to={song.user_id + '/' + song.artist} >{song.artist}</Link>
            </div>
            <div className="about-right">
              {song.description}
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
});
