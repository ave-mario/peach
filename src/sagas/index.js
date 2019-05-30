import { spawn } from 'redux-saga/effects';
import watchSignIn from './sign_in.saga';
import watchSignUp from './sign_up.saga';

export default function*() {
  yield spawn(watchSignIn);
  yield spawn(watchSignUp);
}
