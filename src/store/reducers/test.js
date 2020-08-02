import { INIT_LIST_ITEM } from '../types'//默认数据
const defaultState = [1, 2, 3, 4, 5, 6]

const test = (state = defaultState, action) => {
    let newStats = {}
    switch (action.type) {
        case INIT_LIST_ITEM:
            newStats = action.list
            return newStats
        default:
            return state;
    }
};
export { test }
