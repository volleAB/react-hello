import React, { Component } from 'react'

class ControllerUnit extends Component {
  handleClick(e) {
    e.preventDefault()
    e.stopPropagation()
  }
  render() {
    return (
      <span className="controller-unit" onClick={this.handleClick.bind(this)}></span>
    )
  }
}

export default ControllerUnit;