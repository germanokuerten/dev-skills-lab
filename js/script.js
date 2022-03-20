// Extra attempts

// const $textInput = $("[type='text']")        // [] are only for attributes.
// const $submit = $("[type='submit']")
// const $ul = $("#todo-display")

// const todos = JSON.parse(localStorage.getItem("todos")) || [];

// const addTodoNode = newTodo => {
//   const $li = $("<li>")
//   $li.text(newTodo)
//   $ul.append($li)
//   const remove = (event) => {
//       const $target = $(event.target)
//       $target.remove()
//   }
//   $li.on("click", remove)
// }


// $submit.on("click", (event) => {  
//     event.preventDefault()
//     const newTodo = $textInput.val()                   
//     todos.push(newTodo)
//     addTodoNode(newTodo)
//     $textInput.val("")

    
//     window.localStorage.todos = todos
//     // for (let i = 0; i < todos.length; i++) {
//     //     console.log(todos[i]); 
//     //   }
      
//     localStorage.setItem("todos", JSON.stringify(todos))
//     let newItems = localStorage.getItem('todos');
    
//     console.log(window.localStorage.todos)
// })





// DOM Menu Lab

const $textInput = $("[type='text']")        // [] are only for attributes.
const $submit = $("[type='submit']")
const $ul = $("#todo-display")

const todos = []

// write 4 loop to loop through todos (local storage list)


// creates a new li and appends it to the DOM


$submit.on("click", (event) => {  
    event.preventDefault()                   
    const newTodo = $textInput.val() 
    todos.push(newTodo)
    const $li = $("<li>")
    $li.text(newTodo)
    $ul.append($li)
    const remove = (event) => {
        const $target = $(event.target)
        $target.remove()
    }
    $li.on("click", remove)
    $textInput.val("")

    
    window.localStorage.todos = todos
    // for (let i = 0; i < todos.length; i++) {
    //     console.log(todos[i]); 
    //   }
      
    localStorage.setItem("todos", JSON.stringify(todos))
    let newItems = localStorage.getItem('todos');
    
    console.log(window.localStorage.todos)
})