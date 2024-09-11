import axios from "axios";
import React, { useEffect, useState } from "react";
import UseEffectTable from "./useEffectTabale";
import "./all.modules.css"

const ButtonApiData = () => {
  const [FakeData, setFakeData] = useState([]);
  const [type, setType] = useState("products");

  useEffect(() => {
    fetchData(type);
  }, [type]);

  const fetchData = async (type) => {
    try {
      const { data, status } = await axios.get(
        `https://fakestoreapi.com/${type}`
      );

      if (status == 200) {
        setFakeData(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlerClick = (each) => {
    setType(each);
  };

  const filterData = FakeData.map((each) => {
    if (type == "products") {
      return {
        Data1: each.title,
        Data2: each.category,
        Data3: each.image,
      };
    } else if (type == "carts") {
      return {
        Data1: each.id,
        Data2: each.userId,
        Data3: each.date,
      };
    } else if (type == "users") {
      return {
        Data1: each.username,
        Data2: each.password,
        Data3: each.email,
      };
    }
  });
  return (
    <>
      {["products", "carts", "users"].map((each) => (
        <button key={each} onClick={() => handlerClick(each)}>
          {each}
        </button>
      ))}

      <UseEffectTable Data={filterData} />
    </>
  );
};

export default ButtonApiData;
