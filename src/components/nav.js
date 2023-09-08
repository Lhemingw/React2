import React, { Component } from 'react';  //We import React and the 
//Component class from the 'react' library.
//import Nav from './Nav'; // Import the Nav component
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
 <div>
    <Nav/>
  </div>
//);

export default class Nav extends Component { //We define a class called Navbar that extends the Component class. 
//This is a class-based component.

  render() {
//Inside the class, we define a render() method. 
//The render() method is required in class-based components and returns the JSX that should be rendered to the DOM.

    return (
     
    
//Inside the render() method, we return a <nav> element with the text "Nav" inside it.
//You can use this as a 
//starting point for your navigation bar component in a React application. You can customize the content and styling of the navigation bar as needed by modifying the JSX inside the return() statement.
      <nav>
        <ul>
    <li>Home</li>
    <li>Portfolio</li>
    <li>Contact</li>
        </ul> 
      </nav>
    );
  }
}

//export default Nav;