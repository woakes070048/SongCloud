var React = require('react');
var SongsIndex = require('./songs/index');
var Sidebar = require('./sidebar');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="content-with-sidebar">
        <SongsIndex />
        <Sidebar />
      </div>
    );
  }
});
