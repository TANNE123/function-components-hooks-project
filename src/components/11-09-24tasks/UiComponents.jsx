import React from "react";
import useAxios from "./CustomComponent";

const UiComponents = () => {
  const [counter, incrementHandler, decrementHandler, resetHandler] =
    useAxios();
  return (
    <div>
      <h1>CUSTOM HOOK CODE</h1>
      <h2>{counter}</h2>
      <button onClick={incrementHandler}>INCREMENT</button>
      <button onClick={decrementHandler}>DECREMENT</button>
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
};

export default UiComponents;
