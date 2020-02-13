import React from 'react';
import './App.css';
import RippleAPI from './Services/rippleAPI';
import Navbar from './Components/Navbar/navbar'


function App() {
  return (
    <div className="App">
       
       <Navbar/>
       <div className = 'container'>
         <div className = 'row'>
           <div className = 'col-6'>
           <RippleAPI/>
           </div>
         </div>
       </div>
    </div>
  );
}

export default App;
