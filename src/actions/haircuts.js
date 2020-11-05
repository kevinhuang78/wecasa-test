import API from "utils/API";
import * as constants from "./constants";

export const getHaircuts = () => {
    return dispatch => {
        dispatch({ type: constants.GET_HAIRCUTS_REQUESTED });
        const request = API.get("/universe");
        request
            .then(response => dispatch({ type: constants.GET_HAIRCUTS_SUCCESS, data: response.data }))
            .catch(error => dispatch({ type: constants.GET_HAIRCUTS_FAILURE, data: error }));
        return request;
    };
};