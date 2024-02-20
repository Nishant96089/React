import { MdOutlineDeleteForever } from "react-icons/md";

function DisplayTask({ taskname, taskdate, delBtn }) {
  return (
    <div className="container items-container">
      <div className="row">
        <div className="col-6">{taskname}</div>
        <div className="col-4">{taskdate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => delBtn(taskname)}
          >
            <MdOutlineDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayTask;
