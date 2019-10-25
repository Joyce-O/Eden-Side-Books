const rootElement = document.getElementById('App');
// VANILA JS
// const myElement = document.createElement('h1');
// myElement.className = 'orange';
// myElement.innerText = 'Hello From JoyceLand';

// INTRODUCE REACT
// const myReactElement = React.createElement('h1', {className: 'orange'}, 'Hello From JoyceLand and React');

// rootElement.appendChild(myElement); // Useful for V JS

// REPLACING WITH REACT FUNCTIONAL COMPONENT
// const Hello = function(props) {
//     return React.createElement('h1', {className: 'orange'}, 'Hello from JoyceLand ' + props.time)
// };

// CONVERTING TO A CLASS COMPONENT
class Hello extends React.Component {
    // ADD CONSTRUCTOR AND SET THE STATE
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    // FUNCTION THAT HANDLES UPDATE OF TIME EVERY  //setState too
    tick() {
        this.setState(() => {
            return ({
                time: new Date().toLocaleString()
            });
        });
    }
    // AFTER THAT CALL THE LIFECYCLE METHOD
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    // Add this to avoid memory leak when this component is removed
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Call the render method
    render() {
        return React.createElement('h1', {className: 'orange'}, 'Hello from Joyceland ' + this.state.time);
    }
};

ReactDOM.render(
    // myReactElement, document.getElementById('App')
    React.createElement(Hello, {time: new Date().toLocaleDateString()}, null),
    document.getElementById('App')
);