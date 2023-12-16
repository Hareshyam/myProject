import { ActionTypes } from "../constant/Index";

export const LoginReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case ActionTypes.LOGIN_DATA:
            return state = payload;
        // case ActionTypes.REMOVE_AUTH_ACTION:
        //     return state = []
        default:
            return state;
    }

}