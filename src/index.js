// require('./index.css');

// var secondary = require('./secondary');
// window.console.log('hello world');
// secondary();



require('./index.css');
var react = require('./react.png');
var rootEl = document.getElementById('root');
var imageEl = document.createElement('img');
imageEl.src = react;
rootEl.appendChild(imageEl);