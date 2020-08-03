import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import rootSaga from './sagas/index';

const composeTools = composeWithDevTools({})

const sagaMiddleware = createSagaMiddleware()

// 使用数组是为了方便以后继续添加中间件
const middlewares = [sagaMiddleware];

const store = createStore(reducers, composeTools(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default store