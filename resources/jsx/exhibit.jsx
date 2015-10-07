/* global React */
/* global locations */

var AnimalView = 
React.createClass({
    render: function() {
        return (
                <div className="animal">
                <h3>
                    {this.props.animal.name}
                    </h3>
                    <img src={"images/" + this.props.animal.image} width={300} />
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
            <section className="exhibit">
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
    <ContainerView className="container"  locations={locations}/>,
    document.getElementById('exhibits')
);