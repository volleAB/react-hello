/* eslint-disable react/no-direct-mutation-state */
import React , { Component } from 'react'
import axios from 'axios'
import { link } from 'fs';

class About extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title: 'About',
            count: 1,
            msg: []
        }
    }
    handleClick(e) {
        this.setState({
            count: ++this.state.count
        })
        e.preventDefault()
        e.stopPropagation()
    }
    componentWillMount() {
        console.log('State:' + this.state)
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('State:' + this.state)
        axios.get('http://119.23.47.10/dachuang/brief/')
        .then((res) => {
            this.setState({
                msg: res.data.msg
            })
        })
        console.log('componentDidMount')
    }
    render() {
        const msg = this.state.msg
        console.log(msg)
        return (
            <div className='about'>
                <h2>About</h2>
                <h4>{this.title}</h4>
                <h4>{this.props.value}</h4>
                <h4>{this.state.count}</h4>
                <button onClick={this.handleClick.bind(this)}>add</button>
                <div className='list'>
                    <ul>
                        {/* {msg.map((item) => 
                            <li key={item.id}>
                                {item.title}
                            </li>
                        )} */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default About