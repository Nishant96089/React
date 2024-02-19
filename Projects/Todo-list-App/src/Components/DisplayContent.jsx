import DisplayTask from "./DisplayTask";
import DisplayCss from "../styles/Display.module.css";

function DisplayContent({ tasks, delBtn }) {
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
}

export default DisplayContent;
