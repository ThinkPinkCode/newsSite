var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
        <div>
            <div>
            <h1>Metro Detroit News</h1>
                <h2>Top Stories In Our Area</h2>
                <a href="http://www.twitter.com">Twitter</a>
                <a href="www.facebook.com">Facebook</a>
                <a href="www.instagram.com">Instagram</a>
                <a href="www.linkedin.com">LinkedIn</a>
                <a href="www.gmail.com">Email</a>
            </div>
            //button to go to News Page
            //button to go to Photos page
            <div>
            </div>
            {this.props.children}
            <h1>Footer</h1>
        </div>
        )
    }
});

module.exports = Base;