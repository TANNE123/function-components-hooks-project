import React, { Fragment, useReducer, useState } from "react";

import "./style.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "Age":
      return { ...state, age: state.age + action.payload };
    case "change_name":
      return { ...state, username: action.payload };
    case "Add_Todo":
      return {
        ...state,
        todo: Array.isArray(action.payload)
          ? action.payload
          : [...state.todo, action.payload],
      };
  }
};

const ReducerComponents = () => {
  const initialState = {
    username: "raju",
    age: 23,
    todo: ["welcome to jsx", "welcome to html"],
    homeAddress: {},
  };

  const [name, setName] = useState("");
  const [todoList, setTodoList] = useState("");

  const [currentState, despatch] = useReducer(reducer, initialState);

  const ageHandler = () => {
    despatch({
      type: "Age",
      payload: 2,
    });
  };

  const inputHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = () => {
    if (name) {
      despatch({
        type: "change_name",
        payload: name,
      });
    }
  };

  const todoHandler = (event) => {
    setTodoList(event.target.value);
  };

  const addHandler = () => {
    if (todoList) {
      despatch({
        type: "Add_Todo",
        payload: todoList,
      });
    }
    setTodoList("");
  };

  const deleteHandler = (targetId) => {
    const filterData = currentState.todo.filter((_, id) => id !== targetId);

    despatch({
      type: "Add_Todo",
      payload: filterData,
    });
  };

  const updateHandler = (targetEach, targetIndex) => {
    setTodoList(targetEach);
    const updateValue = currentState.todo.map((updateData, i) =>
      i === targetIndex ? todoList : updateData
    );

    despatch({
      type: "Add_Todo",
      payload: updateValue,
    });
  };

  return (
    <>
      <input type="text" value={name} onChange={inputHandler} />
      <button onClick={submitHandler}>submit</button>
      <h2>{currentState.username}</h2>
      <h1>{currentState.age}</h1>
      <button onClick={ageHandler}>Increment Age</button>
      <hr />

      <input type="text" value={todoList} onChange={todoHandler} />
      <button onClick={addHandler}>Add Todo</button>
      <table>
        <tbody>
          {currentState.todo.map((each, index) => (
            <tr key={index}>
              <td>{each}</td>
              <td>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() => updateHandler(each, index)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReducerComponents;
