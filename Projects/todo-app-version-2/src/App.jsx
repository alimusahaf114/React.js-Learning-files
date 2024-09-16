import AppName from "./Components/AppName";
import EnterTodo from "./Components/EnterTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item is Added ${itemName} Date: ${itemDueDate}`);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <EnterTodo onNewItem={handleNewItem}></EnterTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
