var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Base = require('./components/Base.jsx');
var Page1 = require('./components/page1.jsx');
var Page2 = require('./components/page2.jsx');

var Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Route>
    </Router>
);

module.exports = Routes;
