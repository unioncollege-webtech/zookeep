/* global React ReactDOM locations */

var AnimalView = 
React.createClass({
    render: function() {
        return (
                <div className="unit-20">
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
            return <AnimalView animal={animal} key={animal.name+"1"} />
        };
        return (
            <section className="units-row">
                <h2>{this.props.exhibit[0].location}</h2>
                {this.props.exhibit.map(item)}
            </section>
        );
    }
});

var ContainerView = React.createClass({
    render: function() {
        function item(exhibit) {
            return <ExhibitView exhibit={exhibit} key={exhibit[0].location+"1"} />
        };
        return (
            <section>
                {this.props.locations.map(item)}
            </section>
        );
    }
});


ReactDOM.render(
    <ContainerView className="container"  locations={locations}/>,
    document.getElementById('exhibits')
);