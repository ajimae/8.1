/**
 * @description reducer
 * @param { array } state
 * @param { object } action
 * @returns { object }
 */
export default function question(state = [], action) {
  switch (action.type) {
  case 'LOAD_QUESTION_SUCCESS':
    return {
      ...state,
      data: action.data
    };
  case 'LOAD_QUESTION_FAILURE':
    return {
      ...state,
      error: action.error
    };
  default:
    return state;
  }
}
