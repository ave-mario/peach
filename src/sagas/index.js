import { spawn } from 'redux-saga/effects';
import watchSignIn, { watchLogOut } from './sign_in.saga';
import watchSignUp from './sign_up.saga';
import watchCode from './verification.saga';

export default function*() {
  yield spawn(watchSignIn);
  yield spawn(watchSignUp);
  yield spawn(watchLogOut);
  yield spawn(watchCode);
}
