import React, { useState } from "react";
import useCustomLocalComponent from "./CustomLocalComponent";

const LocalStorageComponents = () => {
  const [name, setName] = useState("");
  const localOutput = useCustomLocalComponent(name);

  const inputHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={inputHandler} />
      <h2>{localOutput}</h2>
    </div>
  );
};

export default LocalStorageComponents;
