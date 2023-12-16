import { ActionTypes } from "../constant/Index";

export const ProductListReducer = (state = [], { type, payload }) => {

    switch (type) {
        case ActionTypes.ADMIN_LOGIN:
            return state = payload;
        // case ActionTypes.REMOVE_AUTH_ACTION:
        //     return state = []
        default:
            return state;
    }

}