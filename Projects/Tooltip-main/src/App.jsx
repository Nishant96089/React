import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

const App = () => {
  return (
    <div className="center-container">
      <Tooltip text="Thanks for hovering! I'm a Tooltip." position="top">
        <button className="center-button">Hover Over Me</button>
      </Tooltip>
    </div>
  );
};

export default App;
