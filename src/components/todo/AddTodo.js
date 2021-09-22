import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/actions/todo";
export default function AddTodo(){
    const dispatch = useDispatch()
    const [todo, setTodo] = useState()
    const addTodoUser = useCallback(() => {
        if(todo) dispatch(addTodo(todo))
        console.log('CHange')
    },[dispatch, todo])
    return <div className="add-todo">
        <input type="text" onChange={e => setTodo(e.target.value)} onKeyPress={e => {
            if (e.keyCode === 13 || e.charCode === 13) addTodoUser()
        }} />
        <button onClick={addTodoUser}>AddTodo</button>
    </div>
}
