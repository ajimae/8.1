const token = localStorage.getItem('x-access-token');

const isLoggedIn = () => {
  if (token) {
    return true;
  }
  return false;
};

export default isLoggedIn;
