import React from 'react'
import '../index.css'
import todoData from './todoData'

function TodoItem(props) {
    const completedItemStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "#ffff"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
            <p style={props.item.completed ? completedItemStyle: null} >{props.item.text}</p>
        </div>
    )
}
export default TodoItem