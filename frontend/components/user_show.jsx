var React = require('react');
var Link = require('react-router').Link;
var UserStore = require('../stores/user_store');
var ClientActions = require('../actions/client_actions');
var SongIndexItem = require('./songs/index_item');


module.exports = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.setUser);
    ClientActions.getUser(parseInt(this.props.params.userId));
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.getUser(parseInt(newProps.params.userId));
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  setUser: function () {
    var user = UserStore.user();
    this.setState({
      username: user.username,
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
        {this.props.children}
      </div>
    );
  }
});
