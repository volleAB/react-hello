import React, { Component } from 'react'
import Route from './router'
import { connect } from 'react-redux'
import { addToCart, updateCart, deleteFromCart }  from './store/actions/cart-actions'

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

App = connect(addToCart, updateCart, deleteFromCart)(App)

export default App;
