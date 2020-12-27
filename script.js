let list = []
function AddNew() {
    document.querySelector(".vide").style.display = "none"
    let todo = document.querySelector('#new').value
    if (todo.trim() != "") {
        let Div = document.createElement("div")
        let text = document.createElement("p")
        let button = document.createElement("button")

        text.innerHTML = todo.trim()
        button.innerHTML = "X"
        button.id = "delete"
        Div.id = "Todo"
        Div.className = "DivParent"
        text.className = "text"

        Div.appendChild(text)
        Div.appendChild(button)
        document.querySelector(".todos").appendChild(Div)

        document.querySelector('#new').value = ""
        exist = true

        document.querySelectorAll("#delete").forEach((selector)=>{
            selector.addEventListener("click", ()=>{
                let index = [].indexOf.call(document.querySelectorAll("#delete"), selector)
                console.log(index);
                document.querySelectorAll("#Todo")[index].remove()
            })
        })

    } else {
        document.querySelector(".vide").style.display = "block"
    }
}

document.querySelector("#add").addEventListener("click", AddNew)


document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        AddNew()
    }
});
