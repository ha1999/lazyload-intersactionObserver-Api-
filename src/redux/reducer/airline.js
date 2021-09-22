import {ADD_PAGE_AIRLINE} from "../actions/airline";

const airlineReducer = (state=[], action) => {
    switch (action.type){
        case ADD_PAGE_AIRLINE:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}

export default airlineReducer