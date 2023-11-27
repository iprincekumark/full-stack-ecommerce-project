import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductList from "../Content/ProductList";
import "./ShopNow.css";

const ShopNow = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <div className="container-02">
        {/* <div
        style={{
          position: "absolute",
          margin: "15px",
          marginTop: "70px",
          fontSize: "20px",
        }}
      >
        ShopNow
      </div> */}
        <div style={{ position: "absolute", marginTop: "100px" }}>
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default ShopNow;
