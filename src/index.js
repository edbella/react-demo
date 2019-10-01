import React from 'react';
import ReactDOM from 'react-dom';
import './resources/style.css';
import './resources/style.css.map';
import 'bootstrap/dist/js/bootstrap';
import 'popper.js';
import '@bootstrapstudio/bootstrap-better-nav/dist/bootstrap-better-nav.css';
//import '@bootstrapstudio/bootstrap-better-nav/dist/bootstrap-better-nav.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
