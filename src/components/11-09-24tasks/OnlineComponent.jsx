import React, { useEffect, useState } from "react";

const useOnlineComponent = () => {
  const [status, setStatus] = useState(true);

  window.addEventListener("online", (event) => {
    console.log(event);
    setStatus(true);
  });

  window.addEventListener("offline", (event) => {
    console.log(event);
    setStatus(false);
  });

  return status;
};

export default useOnlineComponent;
