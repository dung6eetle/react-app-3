import React from 'react'
import './MainContent.css'
import TodoItem from './TodoItem'
import todoData from './todoData'

/*function MainContent() {
    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item} />)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}  Делаем из функции компонент класса для того что бы 
то что хранится в todoData было помещено в состояние и я имел возможность 
изменить список(туду Дата) =>> */



class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: todoData
        }
    }
    render() {
        const todoItems = this.state.todo.map(item => <TodoItem key={item.id} item={item} />)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}
export default MainContent 