import React, { Component } from 'react';

class vvod extends Component {
    constructor(props) {
        super(props);
        this.state = {text22: ''};
        this.handleChange = this.handleChange.bind(this);
        this.testText = this.testText.bind(this);
        this.saveText = this.saveText.bind(this);
    }
    handleChange() {
        this.setState( { text22: document.getElementById('TextPole').value } );
    }
    testText() {
        // this.props.TextAdd();
        console.log(this.props.text)
    }
    saveText() {
        this.props.txtAdd(this.state.text22)
    }
    render() {
        return (
          <div className="App">
          <textarea onChange={this.handleChange} value={this.state.value} id='TextPole'></textarea>
          <button onClick={this.testText}>Вывести</button>
          <button onClick={this.saveText}>Записать в стор</button>
          </div>
        );
      }
}
export default vvod;