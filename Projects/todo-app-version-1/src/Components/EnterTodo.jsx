function EnterTodo() {
  return (
    <>
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter text here..." />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button1">
            Enter
          </button>
        </div>
      </div>
    </>
  );
}

export default EnterTodo;
