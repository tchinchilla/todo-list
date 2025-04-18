import { useState, useRef } from "react"

function TodoForm({ onAddTodo }) {
    const [workingTodo, setWorkingTodo] = useState('')
    const todoTitleInput = useRef(null)

    function handleAddTodo(event) {
    event.preventDefault(); 

    if (workingTodo.trim() === '') {
        alert("Por favor, ingresa el título de la tarea.")
        todoTitleInput.current.focus()
        return
    }
    onAddTodo({ title: workingTodo, id: Date.now() })
    setWorkingTodo('')
    todoTitleInput.current.focus()
    }

    const handleInputChange = (event) => {
        setWorkingTodo(event.target.value)
    };

    return (
    <div>
        <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">To-do </label>
            <input type="text" id="todoTitle" name="title" 
                ref={todoTitleInput} value={workingTodo} onChange={handleInputChange} />
            <button type="submit" disabled={workingTodo === ''}>Add To-do</button>
        </form>
    </div>
    )
}

export default TodoForm