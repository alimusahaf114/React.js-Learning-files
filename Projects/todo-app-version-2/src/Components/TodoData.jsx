import styles from "./TodoData.module.css";
function TodoData({ todoItem, todoDate, onDeleteClick }) {
  return (
    <>
      <div className={styles.row}>
        <div className=" col-6 ">
          <li className={styles.inp1}>{todoItem}</li>
        </div>
        <div className=" col-4">
          <li className={styles.inp1}>{todoDate}</li>
        </div>
        <div className="col-2">
          <button
            type="button"
            className={styles["button"]}
            onClick={() => onDeleteClick(todoItem)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoData;
