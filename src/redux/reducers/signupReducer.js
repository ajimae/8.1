/**
 * @description reducer
 * @param { array } state
 * @param { object } action
 * @returns { object }
 */
export default function signup(state = [], action) {
  switch (action.type) {
  case 'USER_SIGNUP_SUCCESS':
    return {
      ...state,
      user: action.user
    };
  case 'USER_SIGNUP_FAILURE':
    return {
      ...state,
      error: action.error
    };
  default:
    return state;
  }
}
