import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  registationRequest: ['data'],
  ragistrationSuccess: ['data'],
  loginFailure: ['error'],
});

export const SignUpTypes = Types;
export default Creators;
