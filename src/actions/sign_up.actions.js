import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  signUpRequest: ['payload'],
  signUpSuccess: ['payload'],
  signUpFailure: ['error'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
