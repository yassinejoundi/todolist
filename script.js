let todos = []

function createTodo(arg) {
    let Div = document.createElement("div")
    let text = document.createElement("p")
    let button = document.createElement("button") 

    text.innerHTML = arg
    button.innerHTML = "X"
    button.id = "delete"
    Div.id = "Todo"
    Div.className = "DivParent"
    text.className = "text"

    Div.appendChild(text)
    Div.appendChild(button)
    document.querySelector(".todos").appendChild(Div)
}

function deleteTodo() {
    let del = false
    document.querySelectorAll("#delete").forEach((selector, index)=>{
        selector.addEventListener("click", ()=>{
            if (!del) {
                selector.parentNode.remove()
                todos.splice(index, 1)
                console.log(todos);
                localStorage.removeItem('todos');
                localStorage.setItem('todos', JSON.stringify(todos)) 
            }
        })
    })
}

function AddNew() {
    document.querySelector(".vide").style.display = "none"
    let todo = document.querySelector('#new').value
    if (todo.trim() != "") {
        createTodo(todo.trim())
        todos.push(todo.trim())

        localStorage.removeItem('todos');
        localStorage.setItem('todos', JSON.stringify(todos))

        document.querySelector('#new').value = ""

        deleteTodo()

    } else {
        document.querySelector(".vide").style.display = "block"
    }
    document.querySelector('#new').focus()
}

if (localStorage.getItem('todos') != '') {
    todos = JSON.parse(localStorage.getItem('todos'))
    todos.forEach((todo)=>{
        createTodo(todo)
    })
    deleteTodo()
}


document.querySelector('#new').focus()

document.querySelector("#add").addEventListener("click", AddNew)


document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        AddNew()
    }
});
