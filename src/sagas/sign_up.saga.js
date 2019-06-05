import { takeLeading, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import axios from 'axios';
import signUpActions from '../actions/sign_up.actions';

export default function* watchSignUp() {
  yield takeLeading(signUpActions.Types.SIGN_UP_REQUEST, function*({
    payload,
  }) {
    try {
      yield call(axios.post, '/clients', payload);
      yield put(push('/'));
    } catch (error) {
      // TODO: error message
    }
  });
}
