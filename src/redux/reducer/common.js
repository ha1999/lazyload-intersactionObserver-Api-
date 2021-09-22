import {ENABLE_LOADING, DISABLE_LOADING, CHANGE_ROUTE} from '../actions/common'
const initialState = {
    loading: false,
    page: 'home'
}

const commonReducer = (state=initialState, action) => {
    switch (action.type){
        case ENABLE_LOADING:
            return {
                loading: true,
                    ...state
            }
        case DISABLE_LOADING:
            return {
                loading: false,
                ...state
            }
        case CHANGE_ROUTE:
            return {
                ...state,
                page: action.payload
            }


        default:
            return state
    }
}

export default commonReducer