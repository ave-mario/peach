import { takeLeading, call } from 'redux-saga/effects';
import axios from 'axios';
import codeActions from 'actions/verification.actons';

export default function* watchCode() {
  yield takeLeading(codeActions.Types.CODE_REQUEST, function*({ payload }) {
    try {
      yield call(axios.post, '/clients/code', payload);
    } catch (error) {
      // TODO: Errors
    }
  });
}
