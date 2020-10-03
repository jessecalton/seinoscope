import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import DatePicker from './components/DatePicker';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Seinoscope</h1>
      <DatePicker />
    </div>
  );
}

export default App;
