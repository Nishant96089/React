import AppName from "./Components/AppName";
import InputTask from "./Components/InputTask";
import DisplayContent from "./Components/DisplayContent";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, newtasks] = useState([]);

  let addTask = (textVal, dateVal) => {
    if (textVal && dateVal) {
      // let newVal = [
      //   ...tasks,
      //   {
      //     name: textVal,
      //     date: dateVal,
      //   },
      // ];
      // newtasks(newVal);

      newtasks((currVal) => [
        ...currVal,
        {
          name: textVal,
          date: dateVal,
        },
      ]);
    } else {
      alert("Kindly input the tasks you need to add!");
    }
  };

  let delBtn = (taskname) => {
    let remainingVal = tasks.filter((item) => item.name !== taskname);
    newtasks(remainingVal);
  };

  return (
    <center className="todo-container">
      <AppName />
      <InputTask addTask={addTask} />
      {tasks.length === 0 && <p>Enjoy your Day!</p>}
      <DisplayContent tasks={tasks} delBtn={delBtn}></DisplayContent>
    </center>
  );
}

export default App;
