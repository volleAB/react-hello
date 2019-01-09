import React, { Component } from 'react'
import Content from '../components/content'

class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Gallery'
    }
  }
  render() {
    return (
      <div className="Gallery">
        <Content value="content" />
      </div>
    );
  }
}

export default Gallery;
