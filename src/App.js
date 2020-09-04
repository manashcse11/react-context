import React from 'react';
import ShowContextData from './components/showContextData';
import UpdateContextData from './components/updateContextData';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>React Context Example</h1>
      <UpdateContextData />      
      <hr/> 
      <ShowContextData />          
    </div>
  );
}

export default App;
