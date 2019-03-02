import React , { Component } from 'react'

require('../assets/style/home.scss')

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Todos'
        }
    }
    componentDidMount() {
        store.dispatch(addToCart('Coffee 500gm', 1, 250))
        console.log(this.store)
        console.log('componentDidMount')
    } 
    render() {
        return (
            <div className='home'>
                <h2>{this.state.title}</h2>
                <div className="container">
                    <div className="todos">
                        <ul>
                            
                        </ul>
                    </div>
                    <div className="did">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home