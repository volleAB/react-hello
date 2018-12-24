import React, { Component } from 'react'
import logo from '../assets/images/logo.svg'
require ('../assets/style/main.scss')

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Hello React'
        }
    }
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="header-content"><span>{this.state.title}</span></div>
                <div className="header-right"></div>
            </div>
        )
    }
}

export default Header