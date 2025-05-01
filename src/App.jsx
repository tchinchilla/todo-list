import { useState } from 'react'
import './App.css'
import TodoForm from './features/TodoList/TodoForm'
import TodoList from './features/TodoList/TodoList'

function App() {

  const [todoList, setTodoList] = useState([])

  function handleAddTodo(newTodo) {
    setTodoList([...todoList, { ...newTodo, isCompleted: false }])
  }

  function completeTodo(id) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {

        return { ...todo, isCompleted: true }
      }
      return todo
    });
    setTodoList(updatedTodos)
  }

  const updateTodo = (editedTodo) => { 
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === editedTodo.id) { 
        return { ...editedTodo };
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };


  return (
    <div>
      <h1>My To-do</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo} 
      />
    </div>
  );
}

export default App;

