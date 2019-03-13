import React, { Component } from 'react';
import './App.css';
import Vivod from './component/vivod';
import Test from './store/vvodContainer' ///контэйнер вместо компонета


class App extends Component {
  render() {    
    return (
      <div className="App">
      <Test />
      <Vivod />
      </div>
    );
  }
}

export default App;
