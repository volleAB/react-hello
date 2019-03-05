import { get } from 'axios'

let nextTodoId = 3

const getPosts = () => {
    return get('http://jsonplaceholder.typicode.com/posts/1')
  }
/**
 * 添加todo事件
 * @param {String} title 事件
 * @param {String} startDate 开始时间
 * @param {String} situation 事件的情况（green/orange/red）
 * @param {Bollen} isCompleted 是否完成
 */
export const addTodo = (title, startDate, situation = 'green', isCompleted = false) => {
    let id = ++nextTodoId
    return {
        type: 'ADD_TODO',
        payload: {title, startDate, id, situation, isCompleted}
    }
}

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
  
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const getPOSTS = async (dispatch) => {
    const res = await getPosts()
    dispatch({
        type: 'LOAD_POSTS',
        payload: res.data
    })
}

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})
  
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}