import styles from "./EnterTodo.module.css";
function EnterTodo() {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter text here..."
            className={styles["input"]}
          />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className={styles["button1"]}>
            Enter
          </button>
        </div>
      </div>
    </>
  );
}

export default EnterTodo;
