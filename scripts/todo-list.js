// steps
// 1. loop trough the array
// 2. create html code for each indivitual item inside the array
// 3. display that code on the screen

//calling in the variables
const todosList = ["make dinner", "wash dishes"];
//setting my calander into a variable
let calanderElement = document.querySelector(".js-date-input").value;
console.log(calanderElement.length);
//innitial render of the list
renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  for (i = 0; i < todosList.length; i++) {
    //ussing a accumulator patter to add a new item to the todoListHtml Variable string
    const todos = todosList[i];
    const html = `<li>${todos}, ${calanderElement}</li>`;
    //here we are generating the Html
    todoListHtml += html;
    console.log(todoListHtml);
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  //getting the Name from the input/placeholder.
  const inputElement = document.querySelector(".js-name-input");

  //seeting the calander veriable
  let calanderElement = document.querySelector(".js-date-input").value;

  //saving its value into a variable.
  const name = inputElement.value;

  //adding the the value to our array.
  todosList.push(name);
  console.log(todosList);

  //clearing the placeholder
  inputElement.value = "";
  //rendering the new added item
  renderTodoList();
}
