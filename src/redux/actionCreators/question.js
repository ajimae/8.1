/* eslint-disable max-len */
import axios from 'axios';

/**
 * @param {*} data
 * @returns object
 */
export function questionSuccess(data) {
  return {
    type: 'LOAD_QUESTION_SUCCESS',
    data
  };
}

/**
 * @param {*} error
 * @returns object
 */
export function questionFailure(error) {
  return {
    type: 'LOAD_QUESTION_FAILURE',
    error
  };
}

export const question = id => async (dispatch) => {
  try {
    const request = await axios({
      method: 'GET',
      url: `https://ajimae.herokuapp.com/api/v1/questions/${id}`
    });

    return await dispatch(questionSuccess(request.data));
  } catch (err) {
    return dispatch(questionFailure(err.response.data));
  }
};
