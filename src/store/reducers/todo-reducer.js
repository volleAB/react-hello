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
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                    ...state,
                    todoList: [...state.todoList, action.payload]
                }
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default :
            return state
    }
}