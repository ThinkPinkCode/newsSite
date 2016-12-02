var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
        <div>
            <div className = "container">
                <div className="h1">
                    <p>Christmas in Metro Detroit</p>
                </div>
                <h2>Top Attractions In Our Area</h2>
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
        </div>
        )
    }
});

module.exports = Base;