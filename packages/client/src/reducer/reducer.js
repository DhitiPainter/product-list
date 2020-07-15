import {
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_REQUEST
} from '../actions/actions';

const initialState = {
    message: "",
    error: null,
    loading: false,
    products: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                loading: true,
                error: null,
                message: "",
                products: [],
            };
        case GET_PRODUCT_SUCCESS:
            return {
                loading: false,
                error: null,
                message: "",
                products: action.payload
            };
        case GET_PRODUCT_FAILURE:
            return {
                loading: false,
                error: action.payload,
                message: "Something went wrong"
            };
        default:
            return state;
    }
}

