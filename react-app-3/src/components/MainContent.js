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
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo =>{
                if (todo.id === id) {
                    todo.completed = !todo.completed /*Меняет(!) на противоположное */
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })

    }
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}
export default MainContent 