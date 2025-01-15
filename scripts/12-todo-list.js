// steps for the algurithum
// 1. create an array to store the todos
// 2. When we click "Add"
// 3. Get text from textbox
// 4. Add it to the array
// 5. console.log the array

myTodos = [];
addButtonTodos = document.getElementById("buttonTodo");
console.log(addButtonTodos); // confirms buttons is working
theInputValue = document.getElementById("inputValue").value;
console.log(theInputValue);

addButtonTodos.addEventListener("click", () => {
  theInputValue = document.getElementById("inputValue");
  const name = theInputValue.value;
  myTodos.push(name);
  console.log(myTodos);

  if (theInputValue.value !== "") {
    theInputValue.value = "";
  }
});

// The second to do list
// 1. Loop trough the array
// 2. Create some HTML code for each todo
// 3. Put the HTML on the web

const TodolistSecond = [];
let myObject = {};
buttonActivation = document.getElementById("buttonTodo-second");
console.log(buttonActivation);
let innerParagraph = document.getElementById("output-info-second");
//getting calander values
const calandar = document.getElementById("calander");

buttonActivation.addEventListener("click", () => {
  let valueCanlendar = calandar.value;
  const inputInfo = document.getElementById("inputValue-second");
  let actualValueInput = inputInfo.value;

  myObject = {
    name: actualValueInput,
    date: valueCanlendar,
  };

  TodolistSecond.push(myObject);
  console.log(TodolistSecond);
  renderTodoList();
  if (inputInfo.value !== "") {
    inputInfo.value = "";
  }
});

function renderTodoList() {
  let todoList = "";
  console.log(TodolistSecond);

  TodolistSecond.forEach((todoObject, index) => {
    let name = todoObject.name;
    let dueDate = todoObject.date;

    const html = `
    <p>
    ${name} ${dueDate}
    <button onclick="
      TodolistSecond.splice(${index}, 1);
      renderTodoList();
    ">Delete</button>
    </p>`;
    todoList += html;
  });

  innerParagraph.innerHTML = todoList;
  console.log(todoList);
}
