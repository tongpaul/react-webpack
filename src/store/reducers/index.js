import {combineReducers} from 'redux'
import {test} from './test'


const reducers = combineReducers({
    test,
    /*
    还可以继续加入其它的reducer文件，比如：
    settings,
    auth,
    */
});

export default reducers;