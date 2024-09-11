import React, { useEffect, useState } from "react";
import NavBarComponents from "./NavBarCompomponents";
import "./style.css";
import { useParams } from "react-router";
import axios from "axios";

const EmptyComponents = () => {
  const [data, setData] = useState({});
  console.log(data);

  const productId = useParams();

  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId.id}`
      );
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <NavBarComponents />

      <div className="child-div">
        <h3>{data.title}</h3>
        <img src={data.image} width={100} height={100} alt="img" />
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default EmptyComponents;
