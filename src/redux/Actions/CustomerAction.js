// actions.js
import axios from 'axios';
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  CLEAR_ERRORS,
} from '../Constants/Customers';

export const fetchCustomers = () => {
  return (dispatch) => {
    dispatch(fetchCustomersRequest());
    axios
      .get('https://admin.obwsalon.com/api/customers')
      .then((response) => {
        // Dispatch success action with the fetched data
        dispatch(fetchCustomersSuccess(response.data));
      })
      .catch((error) => {
        // Dispatch failure action with the error message
        dispatch(fetchCustomersFailure(error.message));
      });
  };
};

export const fetchCustomersRequest = () => {
  return {
    type: FETCH_CUSTOMERS_REQUEST,
  };
};

export const fetchCustomersSuccess = (data) => {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: data,
  };
};

export const fetchCustomersFailure = (error) => {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
