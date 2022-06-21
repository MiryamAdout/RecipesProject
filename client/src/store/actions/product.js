import * as Types from "./actionTypes";

export const getProductFromSharat=(productArr)=>{
    return{
        type:Types.GET_PRODUCT_FROM_SHARAT,
        payload:productArr
    }
}

export const addProduct=(product)=>{
    return{
        type:Types.ADD_PRODUCT,
        payload:product
    }
}

export const deleteProduct=(productId)=>{
    return{
        type:Types.DELETE_PRODUCT,
        payload:productId
    }
}