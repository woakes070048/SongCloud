var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../../stores/session_store');
var ErrorStore = require('./../../stores/error_store');
var SongApiUtil = require('./../../util/song_api_util');
var SongStore = require('./../../stores/song_store');

var SongForm = React.createClass({

  getInitialState: function () {
    var currentId = SessionStore.currentUser() ? SessionStore.currentUser().id : null;
    var potSong = SongStore.find(this.props.params.songId);
    potSong = potSong ? potSong : {};
    var potDescription = potSong.description ? potSong.description : "";
    return {
      title: potSong.title ? potSong.title : "",
      description: potSong.description ? potSong.description : "",
			imageFile: null,
			imageUrl: potSong.image_url,
      currentUserId: currentId
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  isCurrentUser: function () {
    return this.state.currentUserId === this.props.params.userId;
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.updateCurrentUser);
  },

  updateCurrentUser: function () {
    var currentUser = SessionStore.currentUser();
    this.setState({currentUserId: currentUser ? currentUser.id : null});
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
  },

	handleSubmit: function (e) {
		e.preventDefault();
		var formData;
		formData = new FormData();
		formData.append("song[title]", this.state.title);
		if (this.state.imageFile) {
			formData.append("song[image]", this.state.imageFile);
		}
		if (!this.state.description) {
			formData.append("song[description]", "");
		} else {
      formData.append("song[description]", this.state.description);
    }
    if (this.formType() === "upload") {
      formData.append("song[user_id]", SessionStore.currentUser().id);
      if (this.state.songFile) {
        formData.append("song[file]", this.state.songFile);
      }
      SongApiUtil.createSong(formData, this.redirect);
    } else {
      SongApiUtil.updateSong(formData, this.redirect, this.props.params.songId);
    }
	},

  redirect: function (song) {
    var url = '/' + song.user_id + '/' + song.artist + '/' + song.id + '/' + song.title;
    this.context.router.push(url);
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) { return; }

    var messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType: function () {
    return this.props.location.pathname.split("/").slice(-1)[0];
  },

  titleChange: function (event) {
    this.setState({ title: event.target.value });
  },

  descriptionChange: function (event) {
    this.setState({ description: event.target.value });
  },

	updateImage: function (e) {
    var file = e.currentTarget.files[0];
		if (file) {
			if (file.size > 2097152) {
				alert('Maximum upload file size: 2MB');
				e.currentTarget.value = "";
			} else {
		    var fileReader = new FileReader();
		    fileReader.onloadend = function () {
		      this.setState({ imageFile: file, imageUrl: fileReader.result });
		    }.bind(this);

		    if (file) {
		      fileReader.readAsDataURL(file);
		    }
			}
		}
  },

	updateSong: function (e) {
    var file = e.currentTarget.files[0];
		if (file) {
			if (file.size > 10485760) {
				alert('Maximum upload file size: 10MB');
				e.currentTarget.value = "";
			} else {
		    var fileReader = new FileReader();
		    fileReader.onloadend = function () {
		      this.setState({ songFile: file });
		    }.bind(this);

		    if (file) {
		      fileReader.readAsDataURL(file);
		    }
			}
		}
  },

	render: function () {
    var submitText;
    var songFileButton;
    if (this.formType() === "upload") {
      submitText = 'Upload Song';
      songFileButton = <input type="file" className="user-img" onChange={this.updateSong} accept='audio/*'/>;
    } else {
      submitText = 'Update Song';
      songFileButton = <div className="file-placeholder" />;
    }

    var divStyle = {
      backgroundImage: 'url(' + this.state.imageUrl + ')'
    };

		return (
      <div className="signin-div">
        <div className="centered">
          <form className="signin-form" onSubmit={this.handleSubmit}>

            <input className="sc-input" type="text" value={this.state.title} onChange={this.titleChange} placeholder="Enter Title" />
            <div className="errors" >{ this.fieldErrors("title") }</div>

            <textarea className="sc-input margin-bottom-10" type="text" value={this.state.description} onChange={this.descriptionChange} placeholder="Enter Description" />
            {songFileButton}
            <div className="errors" >{ this.fieldErrors("file") }</div>
            <input className="sc-button" type="submit" value={submitText} />
            <input type="file" className="user-img" onChange={this.updateImage} accept="image/*"/>
            <div className="img-div thumbnail" style={divStyle}/>
            <div className="errors" >{ this.fieldErrors("image") }</div>
          </form>
        </div>
      </div>
		);
	}
});

module.exports = SongForm;
