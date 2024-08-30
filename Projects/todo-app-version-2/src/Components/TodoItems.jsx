import TodoData from "./TodoData";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoData
          key={item}
          todoItem={item.name}
          todoDate={item.Date}
        ></TodoData>
      ))}
    </div>
  );
};

export default TodoItems;
