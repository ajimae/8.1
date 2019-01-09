/**
 * @description reducer
 * @param { array } state
 * @param { object } action
 * @returns { object }
 */
export default function ask(state = [], action) {
  switch (action.type) {
  case 'POST_QUESTION_SUCCESS':
    return {
      ...state,
      data: action.data
    };
  case 'POST_QUESTION_FAILURE':
    return {
      ...state,
      error: action.error
    };
  default:
    return state;
  }
}
