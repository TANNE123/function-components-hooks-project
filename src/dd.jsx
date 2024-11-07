import axios from "axios";
import React, { useState, useEffect } from "react";
const Rajesh = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {        
        setPostData(response.data);
        console.log(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      {postData.map((a) => {
        return (
          <div key={a.id} style={{border:"2px solid" ,display:'inline-block',width:'290px',height:"350px",verticalAlign:"top"}}>
            <h2 >{a.id}</h2>
            <h2>{a.title}</h2>
            <img src={a.thumbnailUrl} alt="" />

          </div>
        );
      })}
    </div>
  );
};

export default Rajesh;
