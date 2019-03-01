import * as actions from '../actions/cart-actions'

const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ]
}

/**
 * 
 * @param {object} state 当前保存在store中的数据
 * @param {function} action 是一个容器
 */
export const counterReducer = function(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

export const cartReducer = function(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        case actions.UPDATE_CART: {
            return {
                ...state,
                cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
            }
        }
        case actions.DELETE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        }
        default:
            return state;
    }
}