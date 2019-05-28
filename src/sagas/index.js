import { spawn } from 'redux-saga/effects';
import watchSignIn from './auth.saga';

export default function*() {
  yield spawn(watchSignIn);
}
