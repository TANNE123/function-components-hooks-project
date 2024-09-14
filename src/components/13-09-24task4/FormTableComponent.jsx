import React, { useState, useEffect, createContext, useContext } from "react";
import "./style.css";
import { Details } from "../../App";
import { useNavigate } from "react-router";


const TableComponent = () => {
    // let [update,setUpdate]=useContext(Details)
    
  const [input, setInput] = useState({
    Description: "",
    Date: "",
    EndDate: "",
    Priority: "",
  });

//   const navigate=useNavigate()
  const [todo, setTodo] = useState([]);
  const [index, setIndex] = useState(null);
  const [option, setOption] = useState("");
  const [dummy, setDummy] = useState([]);
  const [search, setSearch] = useState("");

  const OnChangeHandler = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(dummy));
  }, [dummy]);

  useEffect(() => {
    const searchData = dummy.filter((each) =>
      each.Description.toLowerCase().includes(search.toLowerCase())
    );
    setTodo(searchData);
  }, [search]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (input.Description && input.Date && input.EndDate && input.Priority) {
      setTodo((prevTodo) => [...prevTodo, input]);
    }
    setDummy([...todo, input]);
    setInput({
      Description: "",
      Date: "",
      EndDate: "",
      Priority: "",
    });
  };

  const delateHandler = (targetInd) => {
    const filterData = todo.filter((_, index) => index !== targetInd);
    setTodo(filterData);
  };

  const updateHandler = (targetInd) => {
    setInput(todo[targetInd]);
    setIndex(targetInd);
  };

  const updateSubmitHandler = (event) => {
    event.preventDefault();
    const updateValues = [...todo];
    updateValues[index] = input;
    setTodo(updateValues);
    setIndex(null);
    setInput({
      Description: "",
      Date: "",
      EndDate: "",
      Priority: "",
    });
    setDummy([...todo, input]);
  };

  const optionHandler = (event) => {
    const selectOption = event.target.value;

    if (selectOption == "Low" || "medium" || "high") {
      const filterTodo = dummy.filter((each) => each.Priority === selectOption);
      setTodo(filterTodo);
    }
    if (selectOption === "All") {
      const local = JSON.parse(localStorage.getItem("data"));
      setTodo(local);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const completedHandle=(targetEach,index)=>{
        // navigate(`/${index}`)
    // setUpdate(targetEach)
  }
  

  return (
    <>
      <form
        onSubmit={index || index == 0 ? updateSubmitHandler : submitHandler}
      >
        <label>Description :</label>
        <br />
        <input
          type="text"
          name="Description"
          value={input.Description}
          onChange={OnChangeHandler}
        />
        <br />
        <label>Date of Start :</label>
        <br />
        <input
          type="date"
          name="Date"
          value={input.Date}
          onChange={OnChangeHandler}
        />
        <br />
        <label>Date of End :</label>
        <br />
        <input
          type="date"
          name="EndDate"
          value={input.EndDate}
          onChange={OnChangeHandler}
        />
        <br />
        <label >
            priority :
        </label>
        <br />
        <select
          name="Priority"
          value={input.Priority}
          onChange={OnChangeHandler}
        >
          <option value="">Select one</option>
          <option value="Low">Low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
    <br />
        <button type="submit">
          {index || index == 0 ? "UpdateSubmit" : "Add Todo"}
        </button>
      </form>
      <h2>Up Coming tasks</h2>
      <input type="text" value={search} onChange={searchHandler} />
      <select name="options" value={option} onChange={optionHandler}>
        <option value="">Select one</option>
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <table>
        {todo.length > 0 ? (
          <thead>
            <tr>
              <th>Description</th>
              <th>Date of start</th>
              <th>Date of End</th>
              <th>Priority</th>
              <th>Delete</th>
              <th>Update</th>
              <th>Completed</th>
            </tr>
          </thead>
        ) : (
          ""
        )}

        <tbody>
          {todo.map((each, index) => (
            <tr key={index}>
              <td>{each.Description}</td>
              <td>{each.Date}</td>
              <td>{each.EndDate}</td>
              <td>{each.Priority}</td>
              <td>
                <button onClick={() => delateHandler(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() => updateHandler(index)}>Update</button>
              </td>
              <td>
                <button onClick={()=>completedHandle(each,index)}>Mark As Done</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
