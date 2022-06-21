import * as Types from "./actionTypes";

export const saveOrder = (order) => {
    return {
        type: Types.SAVE_ORDER,
        payload: order
    }
}

export const addToCart = (product, qty) => {
    return {
        type: Types.ADD_TO_CART,
        payload: {...product, qty}
    }
}

export const deleteFromCart = (prodId) => {
    return {
        type: Types.DELETE_FROM_CART,
        payload: prodId
    }
}

export const updateQtyInCart = (prodId, qty) => {
    return {
        type: Types.UPDATE_QTY_IN_CART,
        payload: {prodId, qty}
    }
}
export const getCartFromSharat=(cartArr)=>{
    return{
        type:Types.GET_CART_FROM_SHARAT,
        payload:cartArr
    }
}

