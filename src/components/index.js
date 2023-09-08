import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import Main from './main.js'
import Login from './loginform-app/src/components/index.js';
import Nav from './nav.js';

let element = React.createElement('h1',{},'This is react');
ReactDOM.render(element, document.getElementById('app'));

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Main />
    <Login />
    <Nav />
    <App />
    <Index />
  </React.StrictMode>
); 
// root.render(

              //   React.createElement(LogIn, {}, null),
              //   root.render(
              //     <React.StrictMode>
              //       <LogIn />
              //     </React.StrictMode>
              //   ); 
              // ); 