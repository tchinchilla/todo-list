import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  
  const [todoList, setTodoList] = useState([])
  function handleAddTodo(newTodo){
    setTodoList([...todoList, { id: Date.now(), title: newTodo }])
  }

  return (
<div>
  <h1>My To-do</h1>
    <TodoForm onAddTodo={handleAddTodo}/>
    <TodoList todoList={ todoList }/>
</div>
  )
}

export default App
