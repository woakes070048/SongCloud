var React = require('react');
var SongStore = require('../../stores/song_store');
var ClientActions = require('../../actions/client_actions');

var SongIndexItem = require('./index_item');
var SongForm = require('./form');

module.exports = React.createClass({
  getInitialState: function () {
    return { songs: [], filter: this.props.filter};
  },

  componentDidMount: function () {
    this.songListener = SongStore.addListener(this.getSongs);
    ClientActions.fetchSongs(this.props.filter);
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchSongs(this.propsParams(newProps));
  },

  componentWillUnmount: function () {
    this.songListener.remove();
  },

  getSongs: function () {
    this.setState({ songs: SongStore.all(this.state.filter) });
  },

  // filter: function () {
  //   if (this.props.filter) {
  //     return {user: this.props.user};
  //   } else {
  //
  //   }
  // },

  propsParams: function (newProps) {
    if (newProps.params && newProps.params.userId) {
      return {user_id: parseInt(newProps.params.userId) };
    } else {

    }
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
