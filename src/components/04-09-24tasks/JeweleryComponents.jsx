import axios from "axios";
import React, { useEffect, useState } from "react";

const JeweleryComponents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="child">
      {data.map((each) => (
        <div key={each.id} className="child-div">
          <h3>{each.title}</h3>
          <img src={each.image} width={100} height={100} alt="img" />
          <p>{each.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JeweleryComponents;
