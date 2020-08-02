import { put, takeEvery } from 'redux-saga/effects'
import { INIT_LIST_ITEM_SAGA, INIT_LIST_ITEM } from '../types'

let promist = function () {
    return new Promise((resolve, reject) => {
        resolve([1, 3, 4, 5, 6, 7, 8, 9])
    })
}

function* getListFun() {
    const list = yield promist()
    yield put({ type: INIT_LIST_ITEM, list })
}

function* mySaga() { 
    yield takeEvery(INIT_LIST_ITEM_SAGA, getListFun) 
}

export default mySaga
