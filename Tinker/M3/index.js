const rootElement = document.getElementById('App');
// VANILA JS
// const myElement = document.createElement('h1');
// myElement.className = 'orange';
// myElement.innerText = 'Hello From JoyceLand';

// INTRODUCE REACT
const myReactElement = React.createElement('h1', {className: 'orange'}, 'Hello From JoyceLand and React');

// rootElement.appendChild(myElement); // Useful for V JS

ReactDOM.render(
    myReactElement, document.getElementById('App')
);