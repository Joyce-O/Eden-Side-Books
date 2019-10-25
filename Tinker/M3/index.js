const rootElement = document.getElementById('App');
// VANILA JS
// const myElement = document.createElement('h1');
// myElement.className = 'orange';
// myElement.innerText = 'Hello From JoyceLand';

// INTRODUCE REACT
// const myReactElement = React.createElement('h1', {className: 'orange'}, 'Hello From JoyceLand and React');

// rootElement.appendChild(myElement); // Useful for V JS

// REPLACING WITH REACT FUNCTIONAL COMPONENT
const Hello = function(props) {
    return React.createElement('h1', {className: 'orange'}, 'Hello from JoyceLand ' + props.time)
};

ReactDOM.render(
    // myReactElement, document.getElementById('App')
    React.createElement(Hello, {time: new Date().toLocaleDateString()}, null),
    document.getElementById('App')
);