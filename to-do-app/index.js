const input = document.querySelector("#inputbox");
const addButton = document.querySelector(".addBtn");
const todos = document.querySelector(".todos");
const clearBtn = document.querySelector(".clear");

document.addEventListener("DOMContentLoaded", () => {
    loadTodos();
    itemsLeft();
    itemsActive();
});

function addTodo(text) {
    const listItem = `
        <li>
            <div class="left">
                <div class="status">
                    <i class="fa-solid fa-circle"></i>
                </div>
                <div class="todotext" contenteditable="false">${text}</div>
            </div>
            <div class="right">
                <div class="editBtn">
                    <i class="fa-solid fa-marker" style="color: #D8D9DA;"></i>
                </div>
                <div class="deleteBtn">
                    <i class="fa-solid fa-trash" style="color: #D83F31;"></i>
                </div>
            </div>
        </li>
    `;
    todos.insertAdjacentHTML("beforeend", listItem);
    
    saveTodos();
}

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const text = input.value;
    addTodo(text);
    input.value = "";
    itemsLeft();
    itemsActive();
});

function loadTodos() {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    
    storedTodos.forEach((todo) => {
        addTodo(todo.text);
    });
}

function saveTodos() {
    const todoElements = document.querySelectorAll(".todotext");
    const todosArray = Array.from(todoElements).map((todoElement) => ({
        text: todoElement.textContent.trim(),
    }));

    localStorage.setItem("todos", JSON.stringify(todosArray));
}

function itemsLeft() {
    const ele = document.querySelector(".itemsleft");
    let num = todos.childNodes ? todos.children.length : 0;
    ele.innerHTML = `${num} Tasks`;
}

function itemsActive() {
    const ele = document.querySelector(".itemsActive");
    let count = 0;
    for (let i = 0; i < todos.children.length; i++) {
        const childNode = todos.children[i];
        if (childNode.classList.contains("cross")) {
            count++;
        }
    }
    ele.innerHTML = `${count} Tasks Completed`;
}

todos.addEventListener("click", (event) => {
    const clickedElement = event.target;

    if (clickedElement.parentElement.classList.contains("deleteBtn")) {
        const li = clickedElement.parentElement.parentElement.parentElement;
        todos.removeChild(li);
        saveTodos();
    }

    if (clickedElement.parentElement.classList.contains("status")) {
        const li = clickedElement.parentElement.parentElement.parentElement;
        clickedElement.classList.toggle("check");
        li.classList.toggle("cross");
        saveTodos();
    }

    if (clickedElement.parentElement.classList.contains("editBtn")) {
        const todoTextElement = li.querySelector(".todotext");
        const newText = prompt("Edit todo:", todoTextElement.textContent);

        if (newText !== null) {
            todoTextElement.textContent = newText;
            saveTodos();
        }
    }

    itemsLeft();
    itemsActive();
});

function clearCompleted() {
    for (let i = 0; i < todos.children.length; i++) {
        const child = todos.children[i];
        if (child.classList.contains("cross")) {
            todos.removeChild(child);
        }
    }
    saveTodos();
}

clearBtn.addEventListener("click", () => {
    clearCompleted();
    itemsActive();
    itemsLeft();
});

input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        const text = input.value;
        addTodo(text);
        input.value = "";
        itemsLeft();
        itemsActive();
    }
});
