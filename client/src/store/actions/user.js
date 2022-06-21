import * as Types from "./actionTypes";

export const addUser=(user)=>{
    return{
        type:Types.ADD_USER,
        payload:user
    }
}
export const updateCurrentUser=(currentUser)=>{
    return{
        type:Types.UPDATE_CURRENT_USER,
        payload:currentUser
    }
}

