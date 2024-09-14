import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import TableComponent from "./components/13-09-24task4/FormTableComponent";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateComponent from "./components/13-09-24task4/UpdateComponent";

export const Details=createContext()
const App = () => {
  const [update,setUpdate]=useState([])

  return (
    <>
    <TableComponent />
    </>

  );
};

export default App;




    // <Details.Provider value={[update,setUpdate]}>
      
      {/* <BrowserRouter>
      <Routes>
        <Route path="/:index" element={<UpdateComponent/>}/>
      </Routes>
      </BrowserRouter> */}
    // </Details.Provider>