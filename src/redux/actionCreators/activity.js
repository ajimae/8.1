/* eslint-disable max-len */
import axios from 'axios';

/**
 * @param {*} data
 * @returns object
 */
export function activitySuccess(data) {
  return {
    type: 'LOAD_ACTIVITY_SUCCESS',
    data
  };
}

/**
 * @param {*} error
 * @returns object
 */
export function activityFailure(error) {
  return {
    type: 'LOAD_ACTIVITY_FAILURE',
    error
  };
}

export const activity = () => async (dispatch) => {
  try {
    const request = await axios({
      method: 'GET',
      url: 'https://ajimae.herokuapp.com/api/v1/questions'
    });

    return await dispatch(activitySuccess(request.data));
  } catch (err) {
    return dispatch(activityFailure(err.response.data));
  }
};
