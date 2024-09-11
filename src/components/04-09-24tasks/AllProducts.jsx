import React, { useEffect, useState } from "react";
import NavBarComponents from "./NavBarCompomponents";
import axios from "axios";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

const AllProducts = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status == 200) {
        setData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <NavBarComponents />
      <div style={{textAlign:"center"}}>
        {Data.map((each) => (
          
          <div key={each.id} className="child-div">
            <h3>{each.title}</h3>
            <img src={each.image} width={100} height={100} alt="img" />
            <p>{each.description}</p>
            <button><Link to={`${each.id}`}>View Product</Link></button>
          </div>
       
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
