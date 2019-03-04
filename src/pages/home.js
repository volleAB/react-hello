import React , { Component } from 'react'
import TodoItem from '../components/todoItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo, getPOSTS } from '../store/actions/todo-actions'

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
        // addTodo('')
        this.props.dispatch(addTodo('nabi', '2019-1-5'))    //使用dispatch进行方法的方法
        console.log('componentDidMount')
        console.log(this.props)
    }
    render() {
        const todoList = this.props.todoList
        const posts = this.props.posts
        return (
            <div className='home'>
                <h2>{this.state.title}</h2>
                <div className="container">
                    <div className="todo">
                        {posts.map(item => (
                            <TodoItem key={item.id} text={item.title}></TodoItem>
                        ))}
                    </div>
                    <div className="did">
                        {todoList.map(item => (
                            <TodoItem key={item.id} text={item.title} onClick={() => this.handleClick}></TodoItem>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isCompleted: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            situation: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
}

const mpaStateToProps = (state, ownProps) => {
    return {
        posts: state.todoReducers.posts,
        todoList: state.todoReducers.todoList,
    }
}

//通过connect组件和redux数据，传递state数据和dispatch方法
export default connect(mpaStateToProps)(Home)