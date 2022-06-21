import axios from 'axios';
import * as Types from '../actions/actionTypes';

const initialState={
    usersArr:[
    ],
    currentUser:{},
}

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case Types.ADD_USER:
            return {
                usersArr: [...state.usersArr, action.payload]
            }
            case Types.UPDATE_CURRENT_USER:
                alert(action.payload.status);
                return{
                    ...state,
                    currentUser:action.payload
                }
                default: return state
    }
}