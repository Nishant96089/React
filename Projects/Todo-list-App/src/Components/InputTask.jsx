import { MdAddComment } from "react-icons/md";

function InputTask({ addTask }) {
  const submitBehaviour = (event) => {
    event.preventDefault();
    addTask(text.value, date.value);
    text.value = "";
    date.value = "";
  };
  return (
    <form onSubmit={submitBehaviour} className="container text-center">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter your task" id="text" />
        </div>
        <div className="col-4">
          <input type="date" id="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            <MdAddComment />
          </button>
        </div>
      </div>
    </form>
  );
}

export default InputTask;
