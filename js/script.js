let addInput = document.getElementById('todoInput');
let addBtn = document.getElementById('addToDoBtn');
let todoUL = document.getElementById('todoList');
let countTodo = document.getElementById('countTodo');
let clearAllBtn = document.getElementById('clearToDoBtn');

let todoArray = [];
// Start 
init();

function init() {
    // alert('Wlecome to the ToDo ');
}


// 1) add element to array
// 1) * 1  Keys event
addInput.addEventListener('keyup', () => {
    addBtn.classList.add("active");
});
addBtn.addEventListener('click', () => {
    addTodo();
});;

addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addTodo();
    }
});

// 1) * 2 Add Function
function addTodo() {
    if (addInput.value == "") {
        addBtn.classList.remove('active');
        return;
    }

    todoArray.push(addInput.value);
    showToDo();
}



// 2) show items in display
function showToDo() {
    if (addInput.value == '') {
        addBtn.classList.remove("active");
    }

    let todoLI = '';
    todoArray.forEach((element, i) => {
        todoLI += `
        <li>
        <span>${element}</span><button onclick="removeTodo(${i})">X</button>
        </li>
        `
    });

    todoUL.innerHTML = todoLI;

    addInput.value = '';
    addBtn.classList.remove("active");
    countTodo.innerText = todoArray.length;
    clearAllTodo();
}


// 3) delete items
function removeTodo(i) {
    console.log('Fucking array before deletion', todoArray);

    delete todoArray[i];
    todoArray = todoArray.filter((todoArray) => {
        if (todoArray !== undefined) {
            return todoArray;
        }
    });

    console.log('Fucking array after deletion ', todoArray);
    showToDo();
}


// 4) clearing 
function clearAllTodo() {
    if (todoArray.length > 0) {
        clearAllBtn.classList.add('active');
    } else {
        clearAllBtn.classList.remove('active');
    }

    clearAllBtn.addEventListener('click', () => {
        todoArray = [];
        todoUL.innerHTML = '';
        countTodo.innerText = 0;
    });
} // Finish !!!