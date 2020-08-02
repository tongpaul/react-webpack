import {all} from 'redux-saga/effects';
import mySaga from './test'

export default function* rootSaga() {
    yield all([
        mySaga()
    ]);
}