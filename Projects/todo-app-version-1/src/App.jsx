import AppName from "./Components/AppName";
import EnterTodo from "./Components/EnterTodo";
import TodoData from "./Components/TodoData";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <EnterTodo></EnterTodo>
      <TodoData></TodoData>
      <TodoData></TodoData>
    </center>
  );
}

export default App;
