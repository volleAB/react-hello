import React , { Component } from 'react'
import TodoItem from '../components/todoItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions/todo-actions'

require('../assets/style/home.scss')

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Todo List'
        }
    }
    componentDidMount() {
        // store.dispatch(addToCart('Coffee 500gm', 1, 250))
        console.log('componentDidMount')
        console.log(this.props)
    }
    handleClick(e) {
        alert(this.props)
    }
    render() {
        return (
            <div className='home'>
                <h2>{this.state.title}</h2>
                <div className="container">
                    <div className="todo">
                        {/* {this.props.todos.map(item => (
                            <TodoItem key={item.id} text={item.title} onClick={() => this.toggleTodo('123')}></TodoItem>
                        ))} */}
                    </div>
                    <div className="did">
                        {/* <TodoItem text={this.state.title} onClick={() => this.handleClick}></TodoItem> */}
                    </div>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isCompleted: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            situation: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
    addTodo: PropTypes.func.isRequired
}

export default connect(state => ({
    todos: state.todoList
}), {
    addTodo,
})(Home)