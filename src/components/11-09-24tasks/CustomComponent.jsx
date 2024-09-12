import React, { useEffect, useState } from "react";

const useAxios = () => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  return [counter, incrementHandler, decrementHandler, resetHandler];
};

export default useAxios;
