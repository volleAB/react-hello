import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...[thunk])    //需要使用的中间件
    )
    )

export default store