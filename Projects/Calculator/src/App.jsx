import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [preDisplay, postDisplay] = useState([]);

  let btnHandler = (btnVal) => {
    if (btnVal === "C") {
      postDisplay("");
    } else if (btnVal === "=") {
      let result = eval(preDisplay);
      postDisplay(result);
    } else {
      let dataChange = preDisplay + btnVal;
      postDisplay(dataChange);
    }
  };

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
      <Display displayData={preDisplay}></Display>
      <ButtonsContainer btnHandler={btnHandler}></ButtonsContainer>
    </div>
  );
}

export default App;
