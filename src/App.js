import React from 'react';
import Display from './Components/Display'
import DisplayBetween from './Components/DisplayBetween'
import DisplayBottom from './Components/DisplayBottom';
import './App.css';
import DisplayInput from './Components/DisplayInput';

function App() {
  return (
    <div className="App">
      <Display />
      <DisplayBetween />
      <DisplayInput />
      <DisplayBottom />
    </div>
  );
}

export default App;
