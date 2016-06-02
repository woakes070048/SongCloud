var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../../actions/client_actions');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  editSong: function (event) {
    event.preventDefault();
    var url = "/songs/" + this.props.song.id.toString() + "/edit";
    this.context.router.push(url);
  },

  deleteSong: function (event) {
    event.preventDefault();
    ClientActions.deleteSong(this.props.song.id);
  },

  render: function () {
    var song = this.props.song;

    return (
      <li className="song-index-item group">
        <Link to={"/songs/" + song.id.toString()}>
          <img className="float-left song-index-img"src={song.img_url} />
        </Link>

        <div className="song-index-header">
          <img className="song-index-play interactive" />

          <Link to={"/users/" + song.user_id.toString()}>
            {song.user_id}
          </Link>

          <br/>

          <Link to={"/songs/" + song.id.toString()}>
            {song.title}
          </Link>
        </div>
      </li>
    );
  }
});
