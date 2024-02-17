import "./App.css";
import ListItem from "./components/List-Item";
import ErrorMsg from "./components/ErrorMsg";
import ListHeading from "./components/List-heading";
import DisplayFam from "./components/displayFam";
import FamHead from "./components/FamilyHeading";
import Container from "./components/Container";
import ItemInput from "./components/ItemInput";
import InputFam from "./components/InputFam";
import { useState } from "react";

function App() {
  let list = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "A fifth one",
    "And a sixth one",
  ];

  // The real data only remains in app.jsx.
  // The other components can access the list through Props.
  // First we need a attribute inside the element tag named according ur choice and pass the real data as argument.
  // Then call the attribute as parameter inside the required function.

  let [arr, inputArr] = useState(["Nishant", "Shiwani", "Mummy", "Papa"]);

  const faminputHandler = (event) => {
    if (event.key === "Enter") {
      let newName = [...arr, event.target.value];
      event.target.value = "";
      inputArr(newName);
    }
  };

  return (
    <>
      <Container>
        <ListHeading></ListHeading>
        <ErrorMsg EmptyList={list}></ErrorMsg>
        <ItemInput></ItemInput>
        <ListItem FullList={list}></ListItem>
      </Container>
      
      <Container>
        <FamHead></FamHead>
        <InputFam faminputHandler={faminputHandler}></InputFam>
        <DisplayFam fam={arr}></DisplayFam>
      </Container>
    </>
  );
}

export default App;
