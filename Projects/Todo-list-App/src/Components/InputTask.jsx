function InputTask({ addTask }) {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter your task" id="text" />
        </div>
        <div class="col-4">
          <input type="date" id="date" />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              addTask(text.value, date.value);
              text.value = "";
              date.value = "";
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputTask;
