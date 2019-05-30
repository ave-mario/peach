import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['payload'],
  loginSuccess: ['payload'],
  loginFailure: ['error'],
  logout: null,
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
