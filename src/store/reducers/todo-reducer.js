/* eslint-disable */

const initialState = {
    todoList: [
        {
            title: '准备面试',
            startDate: '2019-3-3',
            id: 1,
            situation: 'red',
            isCompleted: false
        },
        {
            title: '学习react-redux',
            startDate: '2019-2-11',
            id: 2,
            situation: 'yellow',
            isCompleted: true
        }
    ],
    posts: [
        {
            title: '你好',
            id: 0
        }
    ]
}

export const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                    ...state,
                    todoList: [...state.todoList, action.payload]
                }
        case 'DELETE_TODO': 
            let newState = state.todoList
            newState.map(item => {
                if(action.id == item.id) {
                    item.isCompleted = true
                }
            })
            return {
                ...state,
                todoList: [...newState]
            }
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case 'LOAD_POSTS':
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default :
            return state
    }
}
