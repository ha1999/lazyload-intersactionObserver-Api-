import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";
import {removePostApi} from "../../redux/actions/post";
export default function PostItem({post, edit, big}) {
    const dispatch = useDispatch()

    return (
        <Card sx={{ maxWidth: big ? 690 : 345, marginBottom: 5}} data-aos="zoom-in-up">
            <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.id} - {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => dispatch(removePostApi(post.id))} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button onClick={() => edit(post.id)} variant="contained">Edit</Button>
            </CardActions>
        </Card>
    );
}