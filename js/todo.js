const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  //turn to string
}

function deleteToDo(event) {
    const li = event.target.parentElement;  //which button is clicked
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //exclude the item that return false
    saveToDos();                //toDo.id = number , li.id = string
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function hadleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {   //make object(id) instead of text
        text:newTodo,
        id : Date.now(),  //give Random number(id) 
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", hadleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {                          // if savedToDos exist
    const parsedToDos = JSON.parse(savedToDos);   // turn to the array
    toDos = parsedToDos;          //restore previous toDos 
    parsedToDos.forEach(paintToDo);  // paintToDo(function) for Each item 
}

