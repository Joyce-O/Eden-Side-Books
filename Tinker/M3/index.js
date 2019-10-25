const rootElement = document.getElementById('App');

const myElement = document.createElement('hi');
myElement.className = 'orange';
myElement.innerText = 'Hello From JoyceLand';

rootElement.appendChild(myElement);