var React = require('react');
var Link = require('react-router').Link;
var UserStore = require('../stores/user_store');
var ClientActions = require('../actions/client_actions');
var SongIndexItem = require('./songs/index_item');


module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },


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
      userId: user.id,
      username: user.username,
      imageUrl: user.image_url
    });
  },

  render: function () {
    var divStyle;

    if (this.state.imageUrl) {
      divStyle = {
        backgroundImage: 'url(' + this.state.imageUrl + ')'
      };
    }

    var songsLinkState = '';
    var playlistsLinkState = '';

    if (this.props.location && this.props.location.pathname === '/' + this.props.params.userId + '/' + this.props.params.username + '/playlists') {
      playlistsLinkState = 'active';
    } else {
      songsLinkState = 'active';
    }

    return (
      <div className="user-body">
        <div className="profile-header group">
          <div className="thumbnail circular" style={divStyle}/>
          <h2 className="profile-info" >{this.state.username}</h2>
        </div>
        <div className="user-menu group">
          <Link to={this.props.params.userId + '/' + this.props.params.username + '/songs'} className={songsLinkState} >Songs</Link>
          <Link to={this.props.params.userId + '/' + this.props.params.username + '/playlists'} className={playlistsLinkState} >Playlists</Link>
        </div>
        <div className="content-with-sidebar">
          {this.props.children}
          <div className="user-show sidebar">
            <div className="sidebar-footer">
              ©2016
              <a target="_blank" href="https://soundcloud.com"> SoundCloud </a>
              Clone by Eric Moy -
              <a target="_blank" href="https://github.com/EricMoy/SongCloud"> (Github Page)</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
