import React, { Component } from 'react'
import Header from './header'
require ('../assets/style/main.scss')

class Content extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Content'
        }
    }
    render() {
        return (
            <div className="content">
                <Header />
            </div>
        )
    }
}

export default Content;