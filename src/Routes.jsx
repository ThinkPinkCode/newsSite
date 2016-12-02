var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Base = require('./components/Base.jsx');
var News = require('./components/news.jsx');
var Photos = require('./components/photos.jsx');

var Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <Route path="/news" component={News} />
            <Route path="/photos" component={Photos} />
        </Route>
    </Router>
);

module.exports = Routes;
