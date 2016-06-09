var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../../stores/session_store');
var ErrorStore = require('./../../stores/error_store');
var SongApiUtil = require('./../../util/song_api_util');


var SongForm = React.createClass({

  getInitialState: function () {
    return {
      title: "",
      description: "",
      songFile: null,
			imageFile: null,
			imageUrl: null
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
  },

	handleSubmit: function (e) {
		e.preventDefault();
		var formData;
		formData = new FormData();
		formData.append("song[user_id]", SessionStore.currentUser().id);
		formData.append("song[title]", this.state.title);
		if (this.state.songFile) {
			formData.append("song[file]", this.state.songFile);
		}
		if (this.state.imageFile) {
			formData.append("song[image]", this.state.imageFile);
		}
		if (this.state.description) {
			formData.append("song[description]", this.state.description);
		}
    SongApiUtil.createSong(formData);
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
    return this.props.location.pathname.slice(1);
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

    var divStyle = {
      backgroundImage: 'url(' + this.state.imageUrl + ')'
    };

		return (
      <div className="signin-div">
        <div className="centered">
          <form className="signin-form" onSubmit={this.handleSubmit}>

            <input className="sc-input" type="text" value={this.state.title} onChange={this.titleChange} placeholder="Enter Title" />
            <div className="errors" >{ this.fieldErrors("title") }</div>

            <input className="sc-input margin-bottom-10" type="text" value={this.state.description} onChange={this.descriptionChange} placeholder="Enter Description" />
            <input type="file" className="user-img" onChange={this.updateSong} text="Choose audio file"accept='audio/mpeg, audio/x-mpeg, audio/mp3, audio/x-mp3, audio/mpeg3, audio/x-mpeg3, audio/mpg, audio/x-mpg, audio/x-mpegaudio'/>
            <div className="errors" >{ this.fieldErrors("file") }</div>
            <input className="sc-button" type="submit" value='Upload' />
            <input type="file" className="user-img" onChange={this.updateImage} accept="image/jpeg, image/png, image/gif"/>
            <div className="img-div thumbnail" style={divStyle}/>
            <div className="errors" >{ this.fieldErrors("image") }</div>
          </form>
        </div>
      </div>
		);
	}
});

module.exports = SongForm;
