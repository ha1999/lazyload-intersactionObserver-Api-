import axios from "axios";
import toastNotify from '../../utils/toast'
import {enableLoading, disableLoading} from './common'
export const START_FETCH_LIST_POST = 'START_FETCH_LIST_POST'
export const SET_LIST_POST = 'SET_LIST_POST'
export const FAIL_FETCH_LIST_POST = 'FAIL_FETCH_LIST_POST'

export const REMOVE_POST = 'REMOVE_POST'

export const CREATE_POST = 'CREATE_POST'

export const EDIT_POST = 'EDIT_POST'

export const startFetchListPost = () => ({
    type: START_FETCH_LIST_POST
})

export const setListPost = listPost => ({
    type: SET_LIST_POST,
    payload: listPost
})

export const failFetchListPost = (error) => ({
    type: FAIL_FETCH_LIST_POST,
    payload: error
})

export const removePost = id => ({
    type: REMOVE_POST,
    payload: id
})

export const createPost = post => ({
    type: CREATE_POST,
    payload: post
})

export const editPost = post =>({
    type: EDIT_POST,
    payload: post
})

export const fetchListPost = () => async dispatch => {
    try {
        dispatch(enableLoading())
        dispatch(startFetchListPost())
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setListPost(data))
    }catch (error){
        dispatch(failFetchListPost(error.message))
    } finally {
        dispatch(disableLoading())
    }
}

export const removePostApi = (id) => async dispatch => {
    try {
        dispatch(enableLoading())
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(removePost(id))
        toastNotify.success(`Delete completed postId: ${id}`)
    }catch (error){
        toastNotify.error(`Fail to delete postId: ${id}`)
        console.log('Error remove posts')
    } finally {
        dispatch(disableLoading())
    }
}

export const createPostApi = (post, callback) => async dispatch => {
    try {
        dispatch(enableLoading())
        const {data} = await axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
        dispatch(createPost(data))
        toastNotify.success(`Create successful post`)
        callback()
    }catch (error){
        toastNotify.error(` Fail to create post`)
        console.log('Error create posts')
    } finally {
        dispatch(disableLoading())
    }
}

export const editPostApi = (post, callback) => async dispatch => {
    try {
        dispatch(enableLoading())
        const {data} = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)
        dispatch(editPost(data))
        callback()
        toastNotify.success(`Update successful post`)
    }catch (error){
        toastNotify.error(`Fail to update  post`)
        console.log('Error create posts')
    } finally {
        dispatch(disableLoading())
    }
}

