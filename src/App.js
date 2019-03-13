import React, { Component } from 'react';
import './App.css';
import Vivod from './component/vivod';
import Test from './store/vvodContainer';
import Testvivod from './store/vivodContainer'


class App extends Component {
  render() {    
    return (
      <div className="App">
      <Test />
      <Testvivod />
      </div>
    );
  }
}

export default App;
