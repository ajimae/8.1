// eslint-disable-next-line import/prefer-default-export
export const demoAction = () => (dispatch) => {
  dispatch({
    type: 'DEMO_ACTION',
    payload: 'This is a demo action'
  });
};
