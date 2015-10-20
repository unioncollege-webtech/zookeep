/* global React ReactDOM locations */

"use strict";

var AnimalView = React.createClass({
    displayName: "AnimalView",

    render: function render() {
        return React.createElement(
            "div",
            { className: "unit-20" },
            React.createElement(
                "h3",
                null,
                this.props.animal.name
            ),
            React.createElement("img", { src: "images/" + this.props.animal.image, width: 300 })
        );
    }
});

var ExhibitView = React.createClass({
    displayName: "ExhibitView",

    render: function render() {
        function item(animal) {
            return React.createElement(AnimalView, { animal: animal, key: animal.name + "1" });
        };
        return React.createElement(
            "section",
            { className: "units-row" },
            React.createElement(
                "h2",
                null,
                this.props.exhibit[0].location
            ),
            this.props.exhibit.map(item)
        );
    }
});

var ContainerView = React.createClass({
    displayName: "ContainerView",

    render: function render() {
        function item(exhibit) {
            return React.createElement(ExhibitView, { exhibit: exhibit, key: exhibit[0].location + "1" });
        };
        return React.createElement(
            "section",
            null,
            this.props.locations.map(item)
        );
    }
});

ReactDOM.render(React.createElement(ContainerView, { className: "container", locations: locations }), document.getElementById('exhibits'));
