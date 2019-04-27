/* eslint-disable max-len */
import axios from 'axios';

/**
 * @param {*} data
 * @returns object
 */
export function answerSuccess(data) {
  return {
    type: 'POST_ANSWER_SUCCESS',
    data
  };
}

/**
 * @param {*} error
 * @returns object
 */
export function answerFailure(error) {
  return {
    type: 'POST_ANSWER_FAILURE',
    error
  };
}

export const answer = data => async (dispatch) => {
  try {
    const request = await axios({
      method: 'POST',
      url: `https://ajimae.herokuapp.com/api/v1/questions/${data.id}/answers`,
      data: {
        answer: data.answer
      },
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      }
    });
    return await dispatch(answerSuccess(request.data));
  } catch (err) {
    return dispatch(answerFailure(err.response));
  }
};
