import { put, takeEvery } from 'redux-saga/effects'
import { INIT_LIST_ITEM_SAGA, INIT_LIST_ITEM } from '../actions/test'


function* getListFun() {
    yield put({ type: INIT_LIST_ITEM, list: [{ name: 'hello world'},{ name: '你好 世界'}] })
}

function* mySaga() {
    yield takeEvery(INIT_LIST_ITEM_SAGA, getListFun)
}

export default mySaga
