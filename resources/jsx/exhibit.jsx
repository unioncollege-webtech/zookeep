/* global React */
/* global locations */

var AnimalView = 
React.createClass({
    render: function() {
        return (
                <div class="animal">
                <h3>
                    {this.props.animal.name}
                    </h3>
                    <img src={"images/" + this.props.animal.image} />
                </div>
        );
    }
});

var ExhibitView = React.createClass({
    render: function() {
        function item(animal) {
            return <AnimalView animal={animal} />
        };
        return (
            <section>
                <h2>{this.props.exhibit[0].location}</h2>
                {this.props.exhibit.map(item)}
            </section>
        );
    }
});

var ContainerView = React.createClass({
    render: function() {
        function item(exhibit) {
            return <ExhibitView exhibit={exhibit} />
        };
        return (
            <section>
                {this.props.locations.map(item)}
            </section>
        );
    }
});


React.render(
    <ContainerView  locations={locations}/>,
    document.getElementById('exhibits')
);