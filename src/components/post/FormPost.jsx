import React, {useEffect} from 'react'
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import {useDispatch, useSelector} from "react-redux";
import {createPostApi, editPostApi} from "../../redux/actions/post";

export default  function FormPost({mode, postId, setMode}){
    const { control, handleSubmit, formState: { errors }, setValue } = useForm();
    const dispatch = useDispatch()
    const postDetail = useSelector(state => state.post.listPosts.find( pt => pt.id === postId))
    const onSubmit = data => {
       if(mode === 'create') dispatch(createPostApi({...data, userId: Math.floor(Math.random() * 6) + 1}, () => setMode('')))
       else dispatch(editPostApi({...data,id: postDetail.id, userId: Math.floor(Math.random() * 6) + 1}, () => setMode('')))
    }
    useEffect(()=>{
        if(mode === 'edit'){
            setValue("title", postDetail.title)
            setValue("body", postDetail.body)
        }
        else {
            setValue("title",'')
            setValue("body", '')
        }
    }, [postDetail, mode, setValue])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                mode === 'edit' && <label>Post Id: {postDetail.id}</label>
            }
            <label>Post title</label>
            <Controller
                name="title"
                control={control}
                defaultValue={mode === 'create' ? "Your post title": postDetail.title}
                rules={{ required: true, maxLength: 300, minLength: 20 }}
                render={({ field }) => <TextField fullWidth variant="standard" color="primary" {...field} />}
            />
            { errors.title && <span>Error validate data post title is required and amount of character between 20 and 300</span>}
            <label>Post content</label>
            <Controller
                name="body"
                control={control}
                defaultValue={mode === 'create' ? "Your post title": postDetail.body}
                rules={{ required: true, maxLength: 1000, minLength: 100  }}
                render={({ field }) => <TextField fullWidth multiline variant="filled"
                                                  rows={4} {...field} />}
            />
            { errors.body && <span>Error validate data post content is required and amount of character between 100 and 1000</span>}
            <Input type="submit" color="primary" fullWidth  />
        </form>
    );
}