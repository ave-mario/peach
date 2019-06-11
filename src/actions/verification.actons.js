import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  codeRequest: ['payload'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
