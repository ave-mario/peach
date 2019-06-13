import { takeLeading, call, put } from 'redux-saga/effects';
import axios from 'axios';
import signUpActions from 'actions/sign_up.actions';

export default function* watchSignUp() {
  yield takeLeading(signUpActions.Types.SIGN_UP_REQUEST, function*({
    payload,
  }) {
    try {
      yield call(axios.post, '/clients', payload);
      yield put(signUpActions.Creators.signUpSuccess());
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      yield put(signUpActions.Creators.signUpFailure(errorMessage));
    }
  });
}
