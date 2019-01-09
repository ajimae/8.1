/**
 * @description reducer
 * @param { array } state
 * @param { object } action
 * @returns { object }
 */
export default function answer(state = [], action) {
  switch (action.type) {
  case 'POST_ANSWER_SUCCESS':
    return {
      ...state,
      data: action.data
    };
  case 'POST_ANSWER_FAILURE':
    return {
      ...state,
      error: action.error
    };
  default:
    return state;
  }
}
