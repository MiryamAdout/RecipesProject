import * as Types from '../actions/actionTypes';

const initialState = {
    productArr: []
}

export const productReducer = (state= initialState, action) => {
    switch (action.type) {
        case  Types.GET_PRODUCT_FROM_SHARAT:
            return{
                productArr:action.payload
            }
        case Types.ADD_PRODUCT:
            return {
                productArr: [...state.productArr, action.payload]
            }
        case Types.DELETE_PRODUCT:
            let p=state.productArr.filter(prod=>prod.code!==action.payload);
            return{
               productArr:p 
            }
            default: return state;
    }
}