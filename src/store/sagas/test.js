import { put, call, takeEvery } from 'redux-saga/effects'
import { INIT_LIST_ITEM_SAGA, INIT_LIST_ITEM } from '../actions/test'
import { getlist } from '../../server/test'

function* getListFun(data) {
    const res = yield call(getlist, data.paylaod)
    yield put({ type: INIT_LIST_ITEM, list: res.data })
}

function* mySaga() {
    yield takeEvery(INIT_LIST_ITEM_SAGA, getListFun)
}

export default mySaga
