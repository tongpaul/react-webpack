import { INIT_LIST_ITEM_SAGA } from '../types'
export const initListActionSaga = dispatch => (
    {
        initListSaga() {
            dispatch({type: INIT_LIST_ITEM_SAGA})
        }
    }
)