import React, {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {fetchListPost} from "../../redux/actions/post";
import PostItem from "./PostItem";
import Button from '@mui/material/Button';
import FormPost from "./FormPost";
import {changeRoutePage} from "../../redux/actions/common";
export default function ListPosts(){
    const [mode, setMode] = useState('')
    const [idEdit, setIdEdit] = useState(0)
    const dispatch = useDispatch()
    const listPost = useSelector(state => state.post.listPosts)
    const edit = (postId) => {
        setMode('edit')
        setIdEdit(postId)
    }
    const fetchListPostUser = useCallback(()=> {
        dispatch(fetchListPost())
    },[dispatch])
    useEffect(()=> {
        fetchListPostUser()
    },[fetchListPostUser])
    useEffect(()=>{
        dispatch(changeRoutePage('home'))
    },[dispatch])

    useEffect(()=>{
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        async function getPost() {
            try{
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos', {cancelToken: source.token})
                console.log(data)
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    console.log('Error', error.message)
                }
            }
        }
        getPost()
        return () => {
            source.cancel('Operation canceled by the user.');
        }
    },[])
    return <div>
        <Button
            variant="contained"
            onClick={() => setMode('create')}>Create post</Button>
        {
            mode !== '' && <FormPost mode={mode} postId={idEdit} setMode={setMode} />
        }
        <br /><br/>
        <div className="w-100 d-flex flex-row flex-wrap justify-content-around">

        {
            listPost && listPost.map((post, index) =>
                <PostItem
                    post={post}
                    key={index}
                    edit={edit}
                    big={index % 7 === 0} /> )
        }
    </div>
    </div>

}