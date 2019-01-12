// cart-actions type
export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

//cart-actions function
/**
 * 添加到购物车
 * @param {string} product 产品名称
 * @param {number} quantity 产品数量
 * @param {number} unitCost 单位成本
 */
export const addToCart = (product, quantity, unitCost) => {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity, unitCost }
    }
}

export const updateCart = (product, quantity, unitCost) => {
    return {
        type: UPDATE_CART,
        payload: { product, quantity, unitCost }
    }
}

export const deleteFromCart = (product, quantity,unitCost) => {
    return {
        type: DELETE_FROM_CART,
        payload: { product, quantity, unitCost }
    }
}