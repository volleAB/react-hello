import { combineReducers } from 'redux'
import * as allReducers from './cart-reducer'

const rootReducer = combineReducers(allReducers)

export default rootReducer