var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="sidebar">
        <div className="sidebar-footer">
          ©2016
          <a target="_blank" href="https://soundcloud.com"> SoundCloud </a>
          Clone by
          <a target="_blank" href="http://ericmoy.me"> Eric Moy </a>
          -
          <a target="_blank" href="https://github.com/EricMoy/SongCloud"> (Github Page)</a>
        </div>
      </div>
    );
  }
});
