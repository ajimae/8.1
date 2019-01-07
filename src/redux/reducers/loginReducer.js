/**
 * @description reducer
 * @param { array } state
 * @param { object } action
 * @returns { object }
 */
export default function login(state = [], action) {
  switch (action.type) {
  case 'USER_LOGIN_SUCCESS':
    return {
      ...state,
      user: action.user
    };
  case 'USER_LOGIN_FAILURE':
    return {
      ...state,
      error: action.error
    };
  default:
    return state;
  }
}
