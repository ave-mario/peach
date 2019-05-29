import { takeLeading, take, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import loginActions from '../actions/login.actions';

export default function* watchSignIn() {
  yield takeLeading(loginActions.Types.LOGIN_REQUEST, function*({ payload }) {
    try {
      yield call(axios.post, '/clients/code', payload);
      // редирект на поле с кодом
      const response = yield call(axios.post, '/clents/login', payload);
      const { token, ...user } = response.data; // tokens.accessToken
      yield put(loginActions.Creators.loginSuccess({ token, user }));
      // yield call(storetoken, response.data);
      yield put(push('/'));
      yield take(loginActions.Types.LOGOUT);
    } catch (error) {
      console.log('unexpec err');
      // yield put(returnErrors(error.response.data));
    }
  });
}
