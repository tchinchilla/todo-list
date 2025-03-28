function TodoForm() {
    return (
        <div>
            <form>
                <label htmlFor="todoTitle">To-do  </label>
                <input type="text" id="todoTitle"></input>
                <button>Add To-do</button>
            </form>
        </div>
    )
}

export default TodoForm