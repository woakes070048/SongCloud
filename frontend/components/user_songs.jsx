var React = require('react');
var SongsIndex = require('./songs/index');

module.exports = React.createClass({
  render: function () {
    return (
      <SongsIndex filter={ { user_id: parseInt(this.props.params.userId) } }/>
    );
  }
});
