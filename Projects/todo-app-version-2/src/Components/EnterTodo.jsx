import styles from "./EnterTodo.module.css";
import { useState } from "react";
function EnterTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <>
      <div className={styles.row}>
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter text here..."
            className={styles.input1}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.input2}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={styles["button1"]}
            onClick={handleButtonClicked}
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}

export default EnterTodo;
