import { combineReducers } from 'redux'
import * as cartReducers from './cart-reducer'
import * as todoReducers from './todo-reducer'

const rootReducer = combineReducers({...todoReducers, ...cartReducers})

export default rootReducer