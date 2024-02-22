import { useContext } from "react";
import { TodoItems } from "../store/TodoItems";

import DisplayTask from "./DisplayTask";
import DisplayCss from "../styles/Display.module.css";

const DisplayContent = () => {
  const todoItemsContext = useContext(TodoItems);
  const tasks = todoItemsContext.tasks;
  const delBtn = todoItemsContext.delBtn;

  return (
    <div id={DisplayCss.itemsContainer}>
      {tasks.map((item) => (
        <DisplayTask
          key={item.name}
          taskname={item.name}
          taskdate={item.date}
          delBtn={delBtn}
        ></DisplayTask>
      ))}
    </div>
  );
};

export default DisplayContent;
