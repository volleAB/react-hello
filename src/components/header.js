import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
require ('../assets/style/main.scss')

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Hello React',
            navShow: false 
        }
    }
    handleClick() {
        this.setState({
            navShow: !this.state.navShow
        })
    }
    render() {
        let navStyle = {}

        if(this.state.navShow) {
            navStyle.left = '0'
            navStyle.backgroundColor = '#5555558f'
        }

        return (
            <div className="header">
                <div className="header-left" onClick={this.handleClick.bind(this)}>
                    <img src={logo} alt="logo"></img>
                    <ul className='nav' style={navStyle}>
            　　　　　　<li><Link to="/">App</Link></li>
            　　　　　　<li><Link to="/test">Test</Link></li>
        　　 　　　　</ul>
                </div>
                <div className="header-content"><span>{this.state.title}</span></div>
                <div className="header-right"></div>
            </div>
        )
    }
}

export default Header