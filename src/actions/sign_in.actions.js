import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  signInRequest: ['payload'],
  signInSuccess: ['payload'],
  signInFailure: ['error'],
  logout: null,
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
