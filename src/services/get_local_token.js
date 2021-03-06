import signInActions from 'actions/sign_in.actions';

const AUTH_TOKEN_KEY = 'auth token';
const USER_KEY = 'user';

export const initializePreviousToken = store => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  const user = JSON.parse(localStorage.getItem(USER_KEY));
  if (token)
    store.dispatch(signInActions.Creators.signInSuccess({ token, user }));
};

export const storeToken = response => {
  const { ...user } = response.data.user;
  const token = response.data.tokens.accessToken;
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};
