import React, { Component } from 'react'
import Content from './components/content'
import Header from './components/header'
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
        <Header />
        <Content value="content" />
      </div>
    );
  }
}

export default App;
