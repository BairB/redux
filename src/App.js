import React, { Component } from 'react';
import './App.css';
import Vvod from './component/vvod';
import Vivod from './component/vivod';
import Test from './store/vvodContainer'


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
