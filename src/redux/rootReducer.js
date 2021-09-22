import {combineReducers} from "redux";
import todos from "./reducer/todo";
import postReducer from "./reducer/post";
import commonReducer from "./reducer/common";
import airlineReducer from "./reducer/airline";

export default combineReducers({
    todo: todos,
    post: postReducer,
    common: commonReducer,
    airline: airlineReducer
})
