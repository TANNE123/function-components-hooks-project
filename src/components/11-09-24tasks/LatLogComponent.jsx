import React from "react";
import useLatLogHook from "./LatLogHook";

const LatLogComponent = () => {
  const { latitude1, longitude1 } = useLatLogHook();

  return (
    <div>
      <h2>Latitude ={latitude1}</h2>
      <h2>Longitude ={longitude1}</h2>
    </div>
  );
};

export default LatLogComponent;
