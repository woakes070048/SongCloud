var React = require('react');
var SongsIndex = require('./songs/index');

module.exports = React.createClass({
  render: function () {
    return (

      <div className="content-with-sidebar">
        <SongsIndex />
        <div className="charts sidebar">
          <div className="sidebar-footer">
            ©2016
            <a href="https://soundcloud.com"> SoundCloud </a>
            Clone by Eric Moy -
            <a href="https://github.com/EricMoy/SongCloud"> (Github Page)</a>
          </div>
        </div>
      </div>
    );
  }
});
