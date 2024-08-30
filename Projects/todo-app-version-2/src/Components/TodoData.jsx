import styl from "./TodoData.module.css";
function TodoData({ todoItem, todoDate }) {
  return (
    <>
      <div className={styl["kg-row"]}>
        <div className="col-6">{todoItem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className={styl["button"]}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoData;
