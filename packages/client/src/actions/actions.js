import axios from "axios";
import { apiURLs } from "../config/config";
import { toast } from "react-toastify";

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

export const getProducts = (payload) => {
  return (dispatch) => {
    dispatch(getProductRequest());

    axios
      .get(apiURLs.productList, payload)
      .then((res) => res.data)
      .then((res) => {
        console.log("products res", res);

        dispatch(getProductSuccess(res));
      })
      .catch((err) => {
        let msg = "Something went wrong";
          dispatch(getProductFailure(msg));
          toast(msg);
      });
  };
};

export const getProductRequest = () => ({
  type: GET_PRODUCT_REQUEST,
});

export const getProductSuccess = (data) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data,
});

export const getProductFailure = (error) => ({
  type: GET_PRODUCT_FAILURE,
  payload: error,
});
