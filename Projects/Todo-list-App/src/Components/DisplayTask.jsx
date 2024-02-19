import { MdOutlineDeleteForever } from "react-icons/md";

function DisplayTask({ taskname, taskdate, delBtn }) {
  return (
    <div class="container items-container">
      <div class="row">
        <div class="col-6">{taskname}</div>
        <div class="col-4">{taskdate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger"
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
