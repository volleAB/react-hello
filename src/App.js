import React, { Component } from 'react'
import Route from './router'

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
        <Route />
      </div>
    );
  }
}

export default App;
