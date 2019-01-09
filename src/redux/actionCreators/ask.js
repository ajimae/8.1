/* eslint-disable max-len */
import axios from 'axios';

/**
 * @param {*} user
 * @returns object
 */
export function askSuccess(data) {
  return {
    type: 'POST_QUESTION_SUCCESS',
    data
  };
}

/**
 * @param {*} error
 * @returns object
 */
export function askFailure(error) {
  return {
    type: 'POST_QUESTION_FAILURE',
    error
  };
}

export const ask = data => async (dispatch) => {
  try {
    const request = await axios({
      method: 'POST',
      url: 'https://ajimae.herokuapp.com/api/v1/questions',
      data: {
        title: data.title,
        description: data.question
      },
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      }
    });

    return await dispatch(askSuccess(request.data));
  } catch (err) {
    return dispatch(askFailure(err.response));
  }
};
