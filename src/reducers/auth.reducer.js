import { createReducer } from 'reduxsauce';
import signInActions from 'actions/sign_in.actions';
import signUpActions from 'actions/sign_up.actions';
import verificationActions from 'actions/verification.actons';

export const INITIAL_STATE = {
  isAuthenticated: false,
  isSended: false,
  data: {},
  error: null,
};

export const codeRequest = (state, action) => {
  return {
    ...state,
    data: {
      phoneNumber: action.payload.phoneNumber,
    },
    error: null,
  };
};

export const codeSuccess = state => {
  return {
    ...state,
    isSended: true,
    error: null,
  };
};

export const codeFailure = (state, action) => {
  return {
    ...state,
    isSended: false,
    error: action.error,
  };
};

export const signInRequest = state => {
  return {
    ...state,
    error: null,
  };
};

export const signInSuccess = (state, action) => {
  const { user } = action.payload;
  return {
    ...state,
    isAuthenticated: true,
    isSended: false,
    error: null,
    data: {
      phoneNumber: user.phoneNumber,
      name: user.name,
      surname: user.surname,
      email: user.email,
    },
  };
};

export const signInFailure = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

export const signUpRequest = (state, action) => {
  return {
    ...state,
    isSended: true,
    error: null,
    data: {
      phoneNumber: action.payload.phoneNumber,
    },
  };
};

export const signUpSuccess = state => {
  return {
    ...state,
    isSended: true,
    error: null,
  };
};

export const signUpFailure = (state, action) => {
  return {
    ...state,
    isSended: false,
    error: action.error,
  };
};

export const logout = () => {
  return {
    isAuthenticated: false,
  };
};

const authReducer = createReducer(INITIAL_STATE, {
  [verificationActions.Types.CODE_REQUEST]: codeRequest,
  [verificationActions.Types.CODE_FAILURE]: codeFailure,
  [verificationActions.Types.CODE_SUCCESS]: codeSuccess,
  [signInActions.Types.SIGN_IN_REQUEST]: signInRequest,
  [signInActions.Types.SIGN_IN_SUCCESS]: signInSuccess,
  [signInActions.Types.SIGN_IN_FAILURE]: signInFailure,
  [signInActions.Types.LOGOUT]: logout,
  [signUpActions.Types.SIGN_UP_REQUEST]: signUpRequest,
  [signUpActions.Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [signUpActions.Types.SIGN_UP_FAILURE]: signUpFailure,
});

export default authReducer;
