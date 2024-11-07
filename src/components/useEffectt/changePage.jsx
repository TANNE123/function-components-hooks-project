import React, { useState } from "react";
import "./all.modules.css";

const ChangePage = () => {
  const [Id, setId] = useState("");

  const buttonHandler = (id) => {
    setId(id);
  };

  const uiContent = () => {
    switch (Id) {
      case 1:
        return <h1>welcome to first button</h1>;
        break;
      case 2:
        return <h1>welcome to second button</h1>;
        break;
      case 3:
        return <h1>welcome to third button</h1>;
        break;
      default:
        break;
    }
  };
  return (
    <div className="parent">
      <div>
        <button onClick={() => buttonHandler(1)}>click me</button>
        <button onClick={() => buttonHandler(2)}>click me</button>
        <button onClick={() => buttonHandler(3)}>click me</button>
      </div>
      <div className="right-child">{uiContent()}</div>
    </div>
  );
};

export default ChangePage;
