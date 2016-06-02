//React
var React = require('react');
var ReactDOM = require('react-dom');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
//Components
var App = require('./components/app');
var SongsIndex = require('./components/songs/index');
//Auth
var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');
var LoginForm = require('./components/login_form');

var Router = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="charts" component={ SongsIndex }/>
      <Route path="login" component={ LoginForm } />
      <Route path="signup" component={ LoginForm } />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
