import { createReducer } from 'reduxsauce';
import Actions from '../actions/login.actions';

export const INITIAL_STATE = {
  isAuthenticated: false,
  isSended: false,
  data: {},
  error: '',
};

export const request = state => {
  return {
    ...state,
    isSended: true,
  };
};

export const success = state =>
  state.merge({
    isAuthenticated: true,
    // data
  });

export const failure = state =>
  state.merge({
    // error
  });

export const logout = state =>
  state.merge({
    isAuthenticated: false,
  });

const { Types } = Actions;

const authReducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout,
});

export default authReducer;
