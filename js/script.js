/**
 * Retrieve the list of todos from localStorage
 * @returns An array of todos
 */
const getTodos = () => JSON.parse(window.localStorage.getItem("todos")) || []

/**
 * Updates the list of todos in localStorage
 * @param {*} todos An JSON array of todos 
 */
const setTodos = todos => window.localStorage.setItem("todos", JSON.stringify(todos))

/**
 * Removes a todo from the list, updating the localstorage
 * @param {*} $target The target li element 
 */
const removeTodo = $target => {
    const index = $target.index()
    const todos = getTodos()
    setTodos(todos.filter((todo, i) => i !== index))
    $target.remove()
}

/**
 * Sync the todos data with the screen, rendering li elements for each todo
 */
const renderTodos = () => {
    const $ul = $("#todo-display")
    $ul.empty()
    getTodos()
        .map(todo => {
            const $li = $("<li>")
            $li.text(todo)
            $li.on("click", event => removeTodo($(event.target)))
            return $li
        })
        .forEach($li => $ul.append($li))
}

/**
 * Push a todo to the list, updating the localstorage
 * @param {*} data 
 */
const pushTodo = data => {
    const todos = getTodos()
    todos.push(data)
    setTodos(todos)
}

const $textInput = $("[type='text']")        // [] are only for attributes.
const $submit = $("[type='submit']")
$submit.on("click", (event) => {  
    event.preventDefault()                   
    pushTodo($textInput.val())
    $textInput.val("")
    renderTodos()
})

// Initial render
renderTodos()