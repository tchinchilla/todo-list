import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  
  const [newTodo, setnewTodo] = useState("Initial value")

  return (
<div>
  <h1>My To-do</h1>
    <TodoForm/>
    <p>{ newTodo }</p>
    <TodoList/>
</div>
  )
}

export default App
