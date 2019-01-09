import React, { Component } from 'react'

class Test extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Test'
    }
  }
  render() {
    return (
      <div className="Test">
        <h1>Test</h1>
      </div>
    );
  }
}

export default Test;
