var React = require('react');
var Link = require('react-router').Link;
var SongIndexItem = require('./songs/index_item');
var SongStore = require('./../stores/song_store');
var ClientActions = require('../actions/client_actions');

module.exports = React.createClass({
  getInitialState: function () {
    var potSong = SongStore.find(this.props.params.songId);
    song = potSong ? potSong : {};
    return({ song: song  });
  },

  componentDidMount: function () {
    this.songListener = SongStore.addListener(this.setSong);
    ClientActions.getSong(this.props.params.songId);
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.getSong(newProps.params.songId);
  },

  componentWillUnmount: function () {
    this.songListener.remove();
  },

  setSong: function () {
    var song = SongStore.find(this.props.params.songId);
    this.setState({ song: song });
  },


  render: function () {
    return (
      <div>
        <SongIndexItem song={this.state.song} songShow={true}/>
      </div>
    );
  }
});
