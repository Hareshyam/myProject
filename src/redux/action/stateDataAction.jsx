import { ActionTypes } from "../constant/Index";
import axios from "axios";

export const StateDataAction = () => {
    return async function (dispatch) {

        await axios.get(`http://gautamgupta.info/api/getstates`)
            .then(response => {
                 //console.log(response.data.data);
                dispatch({
                    type: ActionTypes.STATE_DATA,
                    payload: response.data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}