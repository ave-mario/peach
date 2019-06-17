import { takeLeading, take, call, put } from 'redux-saga/effects';
import axios from 'axios';
import loginActions from 'actions/sign_in.actions';
import { storeToken, clearToken } from 'services/get_local_token';

export default function* watchSignIn() {
  yield takeLeading(loginActions.Types.SIGN_IN_REQUEST, function*({ payload }) {
    try {
      const response = yield call(axios.post, '/clients/login', payload);
      const { ...user } = response.data.user;
      const token = response.data.tokens.accessToken;
      yield put(loginActions.Creators.signInSuccess({ token, user }));
      yield call(storeToken, response);
      yield take(loginActions.Types.LOGOUT);
      yield call(clearToken);
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      yield put(loginActions.Creators.signInFailure(errorMessage));
    }
  });
}

export function* watchLogOut() {
  yield takeLeading(loginActions.Types.LOGOUT, function*() {
    try {
      yield call(clearToken);
    } catch (error) {
      // TODO: error message
    }
  });
}
