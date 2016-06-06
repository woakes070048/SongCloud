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

  componentWillReceiveProps: function (newProps) {
    ClientActions.getUser(newProps.params.userId);
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  setUser: function () {
    var user = UserStore.user();
    this.setState({
      username: user.username,
      songs: user.songs,
      imageUrl: user.image_url,
      header_img_url: user.header_img_url
    });
  },

  render: function () {
    return (
      <div>
        <div className="profile-header group">
          <div className="thumbnail size_200_200 circular" >
            <img src={this.state.imageUrl} />
          </div>
          <h2 className="profile-info" >{this.state.username}</h2>
        </div>
        <div className="user-menu">

        </div>
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
