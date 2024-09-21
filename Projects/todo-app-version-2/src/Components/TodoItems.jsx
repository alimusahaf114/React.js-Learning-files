import TodoData from "./TodoData";
const TodoItems = ({ todoItems , onDeleteClick }) => {
  
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoData
          key={item.name}
          todoItem={item.name}
          todoDate={item.Date}
          onDeleteClick={onDeleteClick}
        ></TodoData>
      ))}
    </div>
  );
};

export default TodoItems;
