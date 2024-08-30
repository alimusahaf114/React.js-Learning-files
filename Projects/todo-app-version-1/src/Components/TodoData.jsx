function TodoData() {
  let todoItem = " My name is Khan Ali Kunbhar";
  let todoDate = "12/08/2024";

  return (
    <>
      <div className="row kg-row">
        <div className="col-6">{todoItem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button2">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoData;
