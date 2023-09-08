import React from 'react'; 
import Login from './login';

// function App() {
//   return (
//     < > 
//     <nav>Nav</nav> 
//       <Login />
//       <input type= "text"/>
//       </>
  
//   )
    
// }

// export default App;
function App() {
  return <div className="App">
  <Navigation/>
  <Login/>
  {
    <section className='welcomeSection'>
      <h1>welcome, {singleUser.name}</h1>
      <p>Today's Date, {singleUser.time}</p>
    </section>/* Use the Nav component inside the div */}
      {/* Other content of your app */}
  </div>
}

export default App


/*import React from 'react';*/
