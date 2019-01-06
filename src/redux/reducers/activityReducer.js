/**
 * @description reducer
 * @param { array } state
 * @param { object } action
 * @returns { object }
 */
export default function signup(state = [], action) {
  switch (action.type) {
  case 'LOAD_ACTIVITY_SUCCESS':
    return {
      ...state,
      data: action.data
    };
  case 'LOAD_ACTIVITY_FAILURE':
    return {
      ...state,
      error: action.error
    };
  default:
    return state;
  }
}
