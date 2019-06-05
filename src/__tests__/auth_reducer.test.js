import reducer from '../reducers/auth.reducer';

describe('Auth reducers:', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: {},
      error: '',
      isAuthenticated: false,
      isSended: false,
    });
  });
});
