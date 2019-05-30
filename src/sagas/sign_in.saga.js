import { takeLeading, take, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import loginActions from '../actions/sign_in.actions';
import { storeToken } from '../services/get_local_token';

export default function* watchSignIn() {
  yield takeLeading(loginActions.Types.LOGIN_REQUEST, function*({ payload }) {
    try {
      yield call(axios.post, '/clients/code', payload);
      // редирект на поле с кодом
      const response = yield call(axios.post, '/clients/login', payload);
      const { ...user } = response.data.user;
      const token = response.data.tokens.accessToken;
      yield put(loginActions.Creators.loginSuccess({ token, user }));
      yield call(storeToken, response);
      yield put(push('/'));
      yield take(loginActions.Types.LOGOUT);
    } catch (error) {
      // error
    }
  });
}
