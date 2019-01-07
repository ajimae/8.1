/* eslint-disable max-len */
import axios from 'axios';

/**
 * @param {*} user
 * @returns object
 */
export function loginSuccess(user) {
  return {
    type: 'USER_LOGIN_SUCCESS',
    user
  };
}

/**
 * @param {*} error
 * @returns object
 */
export function loginFailure(error) {
  return {
    type: 'USER_LOGIN_FAILURE',
    error
  };
}

export const login = data => async (dispatch) => {
  try {
    const request = await axios({
      method: 'POST',
      url: 'https://ajimae.herokuapp.com/api/v1/auth/login',
      data
    });
    localStorage.setItem('x-access-token', request.data.token);
    return await dispatch(loginSuccess(request.data));
  } catch (err) {
    return dispatch(loginFailure(err.response.data));
  }
};
