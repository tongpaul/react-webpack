import { INIT_LIST_ITEM, DETAIL_ITEM } from '../actions/test'//默认数据
const defaultState = []

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
