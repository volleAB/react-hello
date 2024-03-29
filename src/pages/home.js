/* eslint-disable */

import React , { Component } from 'react'
import TodoItem from '../components/todoItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo, getPOSTS, deleteTodo } from '../store/actions/todo-actions'
// import {createReactContext} from 'react'

require('../assets/style/home.scss')

const StateContext = React.createContext()
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Todos List',
            nowDate: '',
            nowTodo: '',
            canAdd: false
        }
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.props.getPosts()
        this.getDate()
        this.getValue(this.inputRef.current)
        this.showAddButton()
        // console.log(this.inputRef.current)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    getDate() {
        let nowDate = new Date()
        nowDate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate()
        this.setState({
            nowDate,
        })
    }
    getValue(node) {
        node.addEventListener('change', (e) => {
            this.setState({
                nowTodo: node.value
            })
        })
    }
    showAddButton() {
        this.inputRef.current.onfocus = () => {
            this.setState({
                canAdd: true
            })
        }
    }
    addTodoClick() {
        this.props.addTodoFunc(this.state.nowTodo, this.state.nowDate)
        this.inputRef.current.value = ''
    }
    deleteTodoClick(id) {
        this.props.deleteTodoFunc(id)
    }
    render() {
        const todoList = this.props.todoList
        // const posts = this.props.posts
        // const addButton = <div className="sub" onClick={() => this.addTodoClick()}>Add</div>
        const canAddButton = this.state.canAdd
        return (
            <div className='home'>
                <div className="container">
                    <h2>{this.state.title}</h2>
                    {/* {posts.map(item => (
                        <StateContext.Provider value = 'yck'>
                            <TodoItem></TodoItem>
                        </StateContext.Provider>
                    ))} */}
                    <div className="todos">
                        <ul>
                        {todoList.map(item => (
                            <TodoItem key={item.id} title={item.title} startDate={item.startDate} isCompleted={item.isCompleted} deleteOnClick={() => this.deleteTodoClick(item.id)}></TodoItem>
                        ))}
                        </ul>
                    </div>
                    <div className="addTodo">
                        <input type="text" ref={this.inputRef}/>
                        {canAddButton && 
                            <div className="sub" onClick={() => this.addTodoClick()}>Add</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
// onClick={this.deleteTodoClick(item.id)}
// onClick={() => this.addTodoClick()}
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
      ).isRequired,
      addTodoFunc: PropTypes.func.isRequired,
      deleteTodoFunc: PropTypes.func.isRequired
}
/**
 * 接受state，选择性的返回该组件想要的数据，会当做这个组件的props的一部分传给ui组件，
 * ownProps的变化也会触发mapStateToProps
 * @param {object} state store中的state
 * @param {object} ownProps 自定义的props
 */
const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.todoReducers.posts,
        todoList: state.todoReducers.todoList,
    }
}
/**
 * 将该组件所需要的action事件传入该组件的props中
 * @param {function} dispatch 触发action事件
 */
const mapDispatchToProps = dispatch => ({
    addTodoFunc: (a, b) => {
        dispatch(addTodo(a, b))
    },
    getPosts: () => {
        dispatch(getPOSTS)
    },
    deleteTodoFunc: (id) => {
        dispatch(deleteTodo(id))
    }
})

//通过connect组件和redux数据，传递state数据和dispatch方法
export default connect(mapStateToProps, mapDispatchToProps)(Home)