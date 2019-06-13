import { takeLeading, call, put } from 'redux-saga/effects';
import axios from 'axios';
import codeActions from 'actions/verification.actons';

export default function* watchCode() {
  yield takeLeading(codeActions.Types.CODE_REQUEST, function*({ payload }) {
    try {
      yield call(axios.post, '/clients/code', payload);
      yield put(codeActions.Creators.codeSuccess());
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message;
      yield put(codeActions.Creators.codeFailure(errorMessage));
    }
  });
}
