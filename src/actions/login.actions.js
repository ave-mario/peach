import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['phoneNumber'],
  loginSuccess: ['name'],
  loginFailure: ['error'],
  logout: null,
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
