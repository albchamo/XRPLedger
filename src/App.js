import React from 'react';
import './App.css';
import RippleAPI from './Services/rippleAPI';
import Navbar from './Components/Navbar/navbar'


function App() {
  return (
    <div className="App">
       
       <Navbar/>
       
           <RippleAPI/>
          
    </div>
  );
}

export default App;
