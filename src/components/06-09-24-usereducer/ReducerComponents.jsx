import React, { useReducer, useState } from "react";

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
    case "UPDATE":
      return {
        ...state,
        todo: state.todo.map((todo, index) =>
          index === action.payload.index ? action.payload.value : todo
        ),
      };
    default:
      return state;
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
  const [updateIndex, setUpdateIndex] = useState(null);
  const [currentState, dispatch] = useReducer(reducer, initialState);

  const ageHandler = () => {
    dispatch({
      type: "Age",
      payload: 2,
    });
  };

  const inputHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = () => {
    if (name) {
      dispatch({
        type: "change_name",
        payload: name,
      });
    }
  };



  //below code.....
  const todoHandler = (event) => {
    setTodoList(event.target.value);
  };

  const addHandler = () => {
    if (todoList) {
      dispatch({
        type: "Add_Todo",
        payload: todoList,
      });
    }
    setTodoList("");
  };

  const deleteHandler = (targetId) => {
    const filterData = currentState.todo.filter((_, id) => id !== targetId);

    dispatch({
      type: "Add_Todo",
      payload: filterData,
    });
  };

  const updateHandler = (targetEach, targetIndex) => {
    setTodoList(targetEach);
    setUpdateIndex(targetIndex);
  };

  const updateSubmitHandler = () => {
    if (updateIndex !== null && todoList) {
      dispatch({
        type: "UPDATE",
        payload: { index: updateIndex, value: todoList },
      });
      setTodoList("");
      setUpdateIndex(null);
    }
  };

  return (
    <>
      <input type="text" value={name} onChange={inputHandler} />
      <button onClick={submitHandler}>Submit</button>
      <h2>{currentState.username}</h2>
      <h1>{currentState.age}</h1>
      <button onClick={ageHandler}>Increment Age</button>
      <hr />
        <h1>Todo Table</h1>
      <input type="text" value={todoList} onChange={todoHandler} />
      <button onClick={addHandler}>Add Todo</button>
      <button onClick={updateSubmitHandler}>Update Submit</button>
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
