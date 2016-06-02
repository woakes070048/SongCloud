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
      <li className="song-index-item">
        <Link to={"/songs/" + song.id.toString()}>{song.title}</Link>&nbsp;
      </li>
    );
  }
});
