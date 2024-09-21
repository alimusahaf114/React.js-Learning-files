import styles from "./TodoData.module.css";
import { MdDelete } from "react-icons/md";
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
          <MdDelete
            className={styles["button"]}
            onClick={() => onDeleteClick(todoItem)}
          />
        </div>
      </div>
    </>
  );
}

export default TodoData;
