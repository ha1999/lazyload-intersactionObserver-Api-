import React from 'react'
import {connect} from "react-redux";
import TodoItem from "./Todo";

function ListTodo({todos}){
    return <div className="list-todo w-50">
        {
            todos.map((todo, index) => <TodoItem todo={todo} key={index} />)
        }
    </div>
}

const mapStateToProps = state => ({
    todos: state.todo
})

export default connect(mapStateToProps)(ListTodo)
