import React, { useEffect, useState } from "react";

const useCustomLocalComponent = (value) => {
  const [localOutput, setLocalOutput] = useState(null);

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(value));
    const output =JSON.parse(localStorage.getItem("details", JSON.stringify(value)));

    localStorage.getItem("details");
console.log(output);

    setLocalOutput(output);
  }, [value]);

  return localOutput;
};

export default useCustomLocalComponent;
