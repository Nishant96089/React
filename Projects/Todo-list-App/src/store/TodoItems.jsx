import { createContext } from "react";
import { useReducer } from "react";

export const TodoItems = createContext({
  tasks: [],
  addTask: () => {},
  delBtn: () => {},
});

const tasksReducer = (currVal, action) => {
  let newtasks = currVal;

  if (action.type === "ADD_TASK") {
    newtasks = [
      ...currVal,
      {
        name: action.payload.textVal,
        date: action.payload.dateVal,
      },
    ];
  } else if (action.type === "DEL_TASK") {
    newtasks = currVal.filter((item) => item.name !== action.payload.taskname);
  }
  return newtasks;
};

const TodoItemsProvider = ({ children }) => {
  const [tasks, dispatchTasks] = useReducer(tasksReducer, []);

  const addTask = (textVal, dateVal) => {
    if (!textVal || !dateVal) {
      alert("Please fill in all fields");
      return;
    }

    const newTaskaction = {
      type: "ADD_TASK",
      payload: {
        textVal,
        dateVal,
      },
    };
    dispatchTasks(newTaskaction);
  };

  const delBtn = (taskname) => {
    const deleteTaskaction = {
      type: "DEL_TASK",
      payload: {
        taskname,
      },
    };
    dispatchTasks(deleteTaskaction);
  };

  return (
    <TodoItems.Provider value={{ tasks, addTask, delBtn }}>
      {children}
    </TodoItems.Provider>
  );
};

export default TodoItemsProvider;
