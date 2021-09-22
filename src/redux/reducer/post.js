import {START_FETCH_LIST_POST, FAIL_FETCH_LIST_POST, SET_LIST_POST, REMOVE_POST, CREATE_POST, EDIT_POST} from '../actions/post'

const initialState = {
    listPosts: [],
    error: null
}

const postReducer = (state= initialState, action) => {
    switch (action.type){
        case START_FETCH_LIST_POST:
            return {
                ...state,
                error: null
            }
        case FAIL_FETCH_LIST_POST:
            return {
                ...state,
                error: action.payload
            }
        case SET_LIST_POST:
            return {
                listPosts: action.payload,
                error: null
            }
        case REMOVE_POST:
            return {
                listPosts: state.listPosts.filter(post => post.id !== action.payload),
                error: null
            }
        case CREATE_POST:
            return {
                listPosts: [action.payload, ...state.listPosts],
                error: null
            }
        case EDIT_POST:
            return {
                listPosts: state.listPosts.map(post => post.id !== action.payload.id ? post : action.payload),
                error: null
            }
        default:
            return state
    }
}
export default postReducer