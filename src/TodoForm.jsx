import { useRef } from "react"

function TodoForm({onAddTodo}) {
    const todoTitleInput = useRef("")
    function handleAddTodo (event){
        event.preventDefault()
        const title = event.target.title.value
        event.target.title.value = ""
        todoTitleInput.current.focus()
        onAddTodo(title)
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">To-do  </label>
                <input type="text" id="todoTitle" name="title" ref={todoTitleInput}></input>
                <button>Add To-do</button>
            </form>
        </div>
    )
}

export default TodoForm