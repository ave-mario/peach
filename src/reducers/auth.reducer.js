import { createReducer } from 'reduxsauce';
import signInActions from '../actions/sign_in.actions';
import signUpActions from '../actions/sign_up.actions';

export const INITIAL_STATE = {
  isAuthenticated: false,
  isSended: false,
  data: {},
  error: '',
};

export const signInRequest = (state, action) => {
  return {
    ...state,
    isSended: true,
    data: {
      phoneNumber: action.payload.phoneNumber,
    },
  };
};

export const signInSuccess = (state, action) => {
  const { user } = action.payload;
  return {
    ...state,
    isAuthenticated: true,
    data: {
      phoneNumber: user.phoneNumber,
      name: user.name,
      surname: user.surname,
      email: user.email,
    },
  };
};

export const signInFailure = state =>
  state.merge({
    // error
  });

export const signUpRequest = state => {
  return {
    ...state,
    isSended: true,
  };
};

export const signUpSuccess = () => {};

export const signUpFailure = () => {};

export const logout = () => {
  return {
    isAuthenticated: false,
  };
};

const authReducer = createReducer(INITIAL_STATE, {
  [signInActions.Types.LOGIN_REQUEST]: signInRequest,
  [signInActions.Types.LOGIN_SUCCESS]: signInSuccess,
  [signInActions.Types.LOGIN_FAILURE]: signInFailure,
  [signInActions.Types.LOGOUT]: logout,
  [signUpActions.Types.SIGN_UP_REQUEST]: signUpRequest,
  [signUpActions.Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [signUpActions.Types.SIGN_UP_FAILURE]: signUpFailure,
});

export default authReducer;
