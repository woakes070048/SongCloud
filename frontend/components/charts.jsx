var React = require('react');
var SongsIndex = require('./songs/index');
var Sidebar = require('./sidebar');

module.exports = React.createClass({
  render: function () {
    var playFrom = {
      link: this.props.location.pathname,
      linkText: "Playing from charts"
    };
    
    return (
      <div className="content-with-sidebar">
        <SongsIndex playFrom={playFrom} />
        <Sidebar />
      </div>
    );
  }
});
