var React = require('react');
var SongStore = require('../../stores/song_store');
var ClientActions = require('../../actions/client_actions');

var SongIndexItem = require('./index_item');
var SongForm = require('./form');

module.exports = React.createClass({
  getInitialState: function () {
    return { songs: SongStore.all(this.props.filter) };
  },

  componentDidMount: function () {
    this.songListener = SongStore.addListener(this.getSongs);
    ClientActions.fetchSongs(this.props.filter);
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchSongs(newProps.filter);
    this.setState({ songs: SongStore.all(newProps.filter) });
  },

  componentWillUnmount: function () {
    this.songListener.remove();
  },

  getSongs: function () {
    this.setState({ songs: SongStore.all(this.props.filter) });
  },

  render: function () {
    return (
      <div className="song-index">
        <ul className="song-index-list">
          {
            this.state.songs.map(function (song) {
              return (<SongIndexItem key={song.id} song={song} />);
            })
          }
        </ul>
      </div>
    );
  }
});
