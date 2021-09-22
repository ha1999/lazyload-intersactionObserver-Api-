import React from 'react'
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodo} from "../../redux/actions/todo";
export default function TodoItem({todo}){
    const dispatch = useDispatch()
    return <div data-aos="fade-right" className="alert alert-primary d-flex flex-row justify-content-around align-self-center">
                    <span className="w-75">{todo.text}</span>
                    <button
                        onClick={()=> dispatch(removeTodo(todo.id))}
                        type="button"
                        className="btn btn-danger">Delete</button>
                    <button
                        onClick={()=> dispatch(toggleTodo(todo.id))}
                        type="button"
                        className="btn btn-primary">Toggle</button>
            </div>
}