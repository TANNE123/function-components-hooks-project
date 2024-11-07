import React from "react";
import NavBarComponents from "./NavBarCompomponents";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  return (
    <div>
      <NavBarComponents />
      <Link className="category" to={"mens"}>
        Mens
      </Link>
      <Link className="category" to={"jewelery"}>
        jewelery
      </Link>
      <Link className="category" to={"electronics"}>
        electronics
      </Link>
      <Link className="category" to={"women"}>
        women's clothing
      </Link>
      <Outlet />
    </div>
  );
};

export default ProductComponent;
