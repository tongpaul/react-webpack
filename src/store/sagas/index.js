import { all } from 'redux-saga/effects';
const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(path => path !== './index.js')
let datas = []
keys.forEach((value) => {
    const path = context(value).default
    datas.push(path())
})

export default function* rootSaga() {
    yield all(datas);
}