import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import "./from.modules.css";

const FromValidation = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [card, setCard] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();

    const userEnterName = usernameRef.current.value;
    const userEnterPassword = passwordRef.current.value;

    const fetchData = validate(userEnterName, userEnterPassword);

    if (Object.keys(fetchData).length > 0) {
      setFormErrors(fetchData);
    } else {
      callApi(userEnterName, userEnterPassword);
    }

    getData();
  };

  const getData = async () => {
    const result = await axios.get(
      "https://empty-back-data-1.onrender.com/data"
    );
    setCard(result.data);
  };

  const callApi = async (userEnterName, userEnterPassword) => {
    try {
      await axios.post("https://empty-back-data-1.onrender.com/data", {
        username: userEnterName,
        password: userEnterPassword,
      });
      getData(); // Fetch data after successful post
    } catch (err) {
      console.error("API call failed:", err);
    }
  };

  const validate = (username, password) => {
    const FormErrors = {};

    if (!username) {
      FormErrors.usernameError = "Please enter username";
    } else if (username.length > 20) {
      FormErrors.usernameError = "Please enter less than 20 characters";
    }

    if (!password) {
      FormErrors.passwordError = "Please enter password";
    } else if (password.length > 20) {
      FormErrors.passwordError = "Please enter less than 20 characters";
    }

    return FormErrors;
  };

  const removeHandler = (targetId) => {
    const filterData = card.filter((each) => each.id !== targetId);
    setCard(filterData);
  };

  const AllDelete = async () => {
    const result = await axios.get(
      "https://empty-back-data-1.onrender.com/data"
    );
    const allData = result.data;

    await Promise.all(
      allData.map((item) =>axios.delete(`https://empty-back-data-1.onrender.com/data/${item.id}`)
      )
    );
    setCard([]);
  };

  return (
    <>
    <div className="submit-from">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label >Email address:</label>
          <br />
          <input type="text" ref={usernameRef} />
          <br />
          <span style={{ color: "red" }}>{formErrors?.usernameError}</span>
        </div>
        <br />
        <div className="form-group">
          <label>Password:</label>
          <br />
          <input type="password" ref={passwordRef} />
          <br />
          <span style={{ color: "red" }}>{formErrors?.passwordError}</span>
        </div>
         <br />
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
      </div>
      <h2>
        <button onClick={AllDelete}>All Delete</button>
      </h2>
      <div className="from-main">
        {card.map((eachObj) => {
          const { username, password, id } = eachObj;

          return (
            <div className="form" key={id}>
              <form>
                <label >Email address:</label>
                <br />
                <input type="text" disabled={true} value={username} />
                <br />
                <label>Password:</label>
                <br />
                <input type="password" disabled={true} value={password} />
                <button type="button" onClick={() => removeHandler(id)}>
                  Remove
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FromValidation;
