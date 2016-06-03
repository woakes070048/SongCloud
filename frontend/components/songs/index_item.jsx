var React = require('react');
var Link = require('react-router').Link;
var PlayerFooterStore = require('../../stores/player_footer_store');
var PlayerFooterActions = require('../../actions/player_footer_actions');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return { playState: false };
  },

  // editSong: function (event) {
  //   event.preventDefault();
  //   var url = "/songs/" + this.props.song.id.toString() + "/edit";
  //   this.context.router.push(url);
  // },
  //
  // deleteSong: function (event) {
  //   event.preventDefault();
  //   ClientActions.deleteSong(this.props.song.id);
  // },

  componentDidMount: function () {
    this.playerFooterListener = PlayerFooterStore.addListener(this.toggleButtonState);
  },

  componentWillUnmount: function () {
    this.playerFooterListener.remove();
  },

  toggleButtonState: function () {
    if (PlayerFooterStore.song() === this.props.song) {
      this.setState({playState: PlayerFooterStore.playState()});
    } else if (this.state.playState === true) {
      this.setState({playState: false});
    }
  },

  toggleStore: function () {
    PlayerFooterActions.toggleButtonState({
      song: this.props.song,
      playState: !this.state.playState
    });
  },

  // togglePlayerState: function () {
  //   // this.setState({playState: !this.state.playState});
  //
  //   PlayerFooterActions.togglePlayerState({
  //     songUrl: this.props.song.file_url,
  //     playState: !this.state.playState
  //   });
  //
  //   // if (PlayerFooterStore.params().song === this.props.song) {
  //   //   this.state.play = !this.state.play;
  //   // }
  // },

  render: function () {
    var song = this.props.song;
    var playButtonState = 'player-button-' + !this.state.playState;

    return (
      <li className="song-index-item group">
        <Link to={"/songs/" + song.id.toString()}>
          <img className="float-left song-index-img"src={song.img_url} />
        </Link>

        <div className="song-index-header">
          <div className="song-index-play interactive">
            <div className={ playButtonState } onClick={this.toggleStore} />
          </div>
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
