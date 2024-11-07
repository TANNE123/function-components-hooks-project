import { useState } from "react";
import { states } from "./statehalper";
import TableComponent from "./tableCountry";
import "./country.modules.css";

const MyComponent = () => {
  const [States, SetStates] = useState([]);
  const [Country, SetCountry] = useState("");

  const CountryHandler = (event) => {
    event.preventDefault();
    const Country = event.target.value;
    SetCountry(Country);

    const SelectCountry = states.filter(
      (eachCountry) => eachCountry.country === Country
    );

    SetStates(SelectCountry);
  };

  return (
    <>
      <div>
        <select value={Country} onChange={CountryHandler}>
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
        </select>

        {Country == "" ? "" : <TableComponent Data={States} />}
      </div>
    </>
  );
};
export default MyComponent;
