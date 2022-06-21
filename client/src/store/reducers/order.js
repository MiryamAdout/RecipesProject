import { act } from '@testing-library/react';
import * as Types from '../actions/actionTypes';

const initialState = {
    currentOrder: {
    },
    cart: []
}


export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]

            }
        }
        case  Types.GET_CART_FROM_SHARAT:
            return{
                cartArr:action.payload
            }
        case Types.DELETE_FROM_CART: {
            let a = state.cart.filter(prod => prod.code !== action.payload);
            return {
                ...state,
                cart: a
            }
        }
        case Types.UPDATE_QTY_IN_CART: {
            let b = state.cart.map(item => {
                if (item.code === action.payload.prodId)
                    return { ...item, qty: action.payload.qty }
                return item;
            })
            return {
                ...state,
                cart: b
            }
        }
        case Types.SAVE_ORDER:{
        return{
            ...state,
            currentOrder:action.payload
        }    
        }
        default: return state
    }
}