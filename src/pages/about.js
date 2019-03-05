/* eslint-disable react/no-direct-mutation-state */
import React , { Component } from 'react'
import axios from 'axios'

class About extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title: 'About',
            count: 1,
            info: []
        }
        this.ulRefs = React.createRef()
        this.msg = []
    }
    handleClick(e) {
        this.setState({
            count: ++this.state.count
        })
        e.preventDefault()
        e.stopPropagation()
    }
    showMsg(arr) {
        let li = arr[0]
        this.setState({
            info: li
        })
        console.log(this.state.info)
    }
    getMsg() {
        axios.get('http://119.23.47.10/dachuang/brief/')
        // api.getArticle()
            .then((res) => {
                let msg = res.data.mes
                this.showMsg(msg)
            })
    }
    componentWillMount() {
        console.log('State:' + this.state)
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('State:' + this.state)
        this.getMsg()
        console.log('componentDidMount')
    }
    
    render() {
        return (
            <div className='about'>
                <h2>About</h2>
                <h4>{this.title}</h4>
                <h4>{this.state.count}</h4>
                <button onClick={this.handleClick.bind(this)}>add</button>
                <div className='list'>
                    <ul ref={this.ulRefs}>
                        {this.state.info.map((item) => 
                            <li key={item.id}>
                                {item.title} —————————— {item.time}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}


export default About