/* eslint-disable */

import store from './store.js'
import { addToCart, updateCart, deleteFromCart }  from './actions/cart-actions'
import { addTodo, setVisibilityFilter, toggleTodo, getPOSTS }  from './actions/todo-actions'

console.log("initial state: ", store.getState())

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addTodo('coffee', '2019-1-1'))

// store.dispatch(getPOSTS)

// Update Cart
// store.dispatch(updateCart('Flour 1kg', 5, 110));

// Delete from Cart
// store.dispatch(deleteFromCart('Coffee 500gm'));

// unsubscribe()

export default store