var React = require('react');
var Link = require('react-router').Link;
var UserStore = require('../stores/user_store');
var ClientActions = require('../actions/client_actions');
var SongIndexItem = require('./songs/index_item');


module.exports = React.createClass({
  getInitialState: function () {
    return {songs: []};
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.setUser);
    ClientActions.getUser(this.props.params.userId);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  setUser: function () {
    var user = UserStore.user();
    this.setState({
      username: user.username,
      songs: user.songs,
      img_url: user.img_url,
      header_img_url: user.header_img_url
    });
  },

  render: function () {
    return (
      <div>
        <div className="header-image">
          {this.state.username}
          <ul className="song-index-list">
            {
              this.state.songs.map(function (song) {
                return (<SongIndexItem key={song.id} song={song} />);
              })
            }
          </ul>
          <img src={this.state.img_url} />
          <img src={this.state.header_img_url} />
        </div>
      </div>
    );
  }
});
