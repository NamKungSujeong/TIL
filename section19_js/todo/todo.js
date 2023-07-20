let todo = prompt("hello");
let todoList = [];

while (todo !== "q") {
  if (todo === "new") {
    const newTodo = prompt("input todo");
    todoList.push(newTodo);
    console.log(`add ${newTodo}`);
  } else if (todo === "list") {
    console.log("************");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i} : ${todoList[i]}`);
    }
    console.log("************");
  } else if (todo === "delete") {
    const deleteTodoIndex = parseInt(prompt("delete todo"));
    if (!Number.isNaN(deleteTodoIndex)) {
      const deleteTodo = todoList.splice(deleteTodoIndex, 1);
      console.log(`you deleted ${deleteTodo}`);
    } else {
      console.log("unknown");
    }
  }
  todo = prompt("what would you like to do?");
}
