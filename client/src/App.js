import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import DatePicker from './components/DatePicker';
import About from './components/About';
import Seinoscope from './components/Seinoscope';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <About />
        <DatePicker />
        <Seinoscope />
      </div>
    </Provider>
  );
}

export default App;
