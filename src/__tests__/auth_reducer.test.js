import reducer from 'reducers/auth.reducer';
import verificationActions from 'actions/verification.actons';
import signInActions from 'actions/sign_in.actions';
import signUpActions from 'actions/sign_up.actions';

describe('Auth reducers:', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: {},
      error: null,
      isAuthenticated: false,
      isSended: false,
    });
  });
  it('should handle CODE_REQUEST', () => {
    const action = {
      type: verificationActions.Types.CODE_REQUEST,
      payload: {
        phoneNumber: 'phoneNumber',
      },
    };
    expect(reducer({}, action)).toEqual({
      data: {
        phoneNumber: 'phoneNumber',
      },
      error: null,
    });
  });
  it('should handle CODE_SUCCESS', () => {
    const action = {
      type: verificationActions.Types.CODE_SUCCESS,
    };
    expect(reducer({}, action)).toEqual({
      isSended: true,
      error: null,
    });
  });
  it('should handle CODE_FAILURE', () => {
    const action = {
      type: verificationActions.Types.CODE_FAILURE,
      error: 'error',
    };
    expect(reducer({}, action)).toEqual({
      isSended: false,
      error: 'error',
    });
  });

  it('should handle SIGN_IN_REQUEST', () => {
    const action = {
      type: signInActions.Types.SIGN_IN_REQUEST,
    };
    expect(reducer({}, action)).toEqual({
      error: null,
    });
  });
  it('should handle SIGN_IN_SUCCESS', () => {
    const action = {
      type: signInActions.Types.SIGN_IN_SUCCESS,
      payload: {
        user: {
          phoneNumber: 'phoneNumber',
          name: 'name',
          surname: 'surname',
          email: 'email',
        },
      },
    };
    const { user } = action.payload;
    expect(reducer({}, action)).toEqual({
      data: {
        phoneNumber: user.phoneNumber,
        name: user.name,
        surname: user.surname,
        email: user.email,
      },
      isAuthenticated: true,
      isSended: false,
      error: null,
    });
  });
  it('should handle SIGN_IN_FAILURE', () => {
    const action = {
      type: signInActions.Types.SIGN_IN_FAILURE,
      error: 'error',
    };
    expect(reducer({}, action)).toEqual({
      error: 'error',
    });
  });
  it('should handle LOGOUT', () => {
    const action = {
      type: signInActions.Types.LOGOUT,
    };
    expect(reducer({}, action)).toEqual({
      isAuthenticated: false,
    });
  });

  it('should handle SIGN_UP_REQUEST', () => {
    const action = {
      type: signUpActions.Types.SIGN_UP_REQUEST,
      payload: {
        phoneNumber: 'phoneNumber',
      },
    };
    expect(reducer({}, action)).toEqual({
      error: null,
      isSended: true,
      data: {
        phoneNumber: 'phoneNumber',
      },
    });
  });
  it('should handle SIGN_UP_SUCCESS', () => {
    const action = {
      type: signUpActions.Types.SIGN_UP_SUCCESS,
    };
    expect(reducer({}, action)).toEqual({
      error: null,
      isSended: true,
    });
  });
  it('should handle SIGN_UP_FAILURE', () => {
    const action = {
      type: signUpActions.Types.SIGN_UP_FAILURE,
      error: 'error',
    };
    expect(reducer({}, action)).toEqual({
      error: null,
      isSended: false,
      error: 'error',
    });
  });
});
