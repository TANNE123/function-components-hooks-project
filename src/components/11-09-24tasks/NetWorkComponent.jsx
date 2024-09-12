import React from "react";
import useOnlineComponent from "./OnlineComponent";

const NetWorkComponent = () => {
  const status = useOnlineComponent();

  return (
    <div>{status ? <h2>you are online</h2> : <h2>you are offline</h2>}</div>
  );
};

export default NetWorkComponent;
