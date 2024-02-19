import { MdAddComment } from "react-icons/md";

function InputTask({ addTask }) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter your task" id="text" />
        </div>
        <div className="col-4">
          <input type="date" id="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              addTask(text.value, date.value);
              text.value = "";
              date.value = "";
            }}
          >
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputTask;
