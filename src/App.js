import React, { Component } from 'react'
import Content from './components/content'
// import './App.css';
// import { throws } from 'assert';
require ('./assets/style/common.scss')

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'App'
    }
  }
  render() {
    return (
      <div className="App">
        <Content value="content" />
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default App;
