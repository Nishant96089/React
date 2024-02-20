import { useRef } from "react";
import { MdAddComment } from "react-icons/md";

function InputTask({ addTask }) {
  const textRef = useRef(null);
  const dateRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(textRef.current.value, dateRef.current.value);
    textRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="container text-center">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter your task" ref={textRef} />
        </div>
        <div className="col-4">
          <input type="date" ref={dateRef} />
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
