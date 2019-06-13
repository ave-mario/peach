import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  codeRequest: ['payload'],
  codeFailure: ['error'],
  codeSuccess: [],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
