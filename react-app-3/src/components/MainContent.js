import React from 'react'
import './MainContent.css'
import TodoItem from './TodoItem'

function MainContent() {
    return (
        <div className="todo-list">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}

export default MainContent 