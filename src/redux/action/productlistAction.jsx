import { ActionTypes } from "../constant/Index";
import axios from "axios";

export const ProductListAction = () => {
    return async function (dispatch) {

        await axios.get(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/login`)
            .then(response => {
                //    console.log(response)
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