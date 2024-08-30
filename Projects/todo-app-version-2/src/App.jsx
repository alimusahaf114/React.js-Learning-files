import AppName from "./Components/AppName";
import EnterTodo from "./Components/EnterTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      Date: "12/21/2003",
    },
    {
      name: "Buy Milk",
      Date: "12/21/2003",
    },
    {
      name: "Go to School",
      Date: "12/21/2008",
    },
    {
      name: " I will Join the University",
      Date: "12/01/2022",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <EnterTodo></EnterTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
