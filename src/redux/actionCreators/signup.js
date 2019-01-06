/* eslint-disable max-len */
import axios from 'axios';

/**
 * @param {*} user
 * @returns object
 */
export function signupsuccess(user) {
  return {
    type: 'USER_SIGNUP_SUCCESS',
    user
  };
}

/**
 * @param {*} error
 * @returns object
 */
export function signupfailure(error) {
  return {
    type: 'USER_SIGNUP_FAILURE',
    error
  };
}

export const signup = data => async (dispatch) => {
  try {
    const request = await axios({
      method: 'POST',
      url: 'https://ajimae.herokuapp.com/api/v1/auth/signup',
      data
    });
    localStorage.setItem('x-access-token', request.data.token);
    return await dispatch(signupsuccess(request.data));
  } catch (err) {
    return dispatch(signupfailure(err.response.data));
  }
};
