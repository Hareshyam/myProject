import { ActionTypes } from "../constant/Index";
import axios from "axios";

export const ProductListAction = () => {
    return async function (dispatch) {

        await axios.get(``)
            .then(response => {//https://fakestoreapi.com/products
                //console.log(response.data);
                dispatch({
                    type: ActionTypes.PRODUCT_LIST,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const AddToCardAction = (data) => {
    return {
        type: ActionTypes.ADD_TO_CARD,
        payload: data
    }
}

export const RemoveToCardAction = (data) => {
    return {
        type: ActionTypes.REMOVE_TO_CARD,
        payload: data
    }
}

export const AddToCardArrIDAction = (data) => {
    return {
        type: ActionTypes.ADD_TO_CARD_ARR_ID,
        payload: data
    }
}

export const RemoveToCardArrIDAction = (data) => {
    return {
        type: ActionTypes.REMOVE_TO_CARD_ARR_ID,
        payload: data
    }
}

export const IncrementAction = (data) => {
    return {
        type: ActionTypes.INC_DATA,
        payload: data
    }
}

export const DecrementAction = (data) => {
    return {
        type: ActionTypes.DEC_DATA,
        payload: data
    }
}