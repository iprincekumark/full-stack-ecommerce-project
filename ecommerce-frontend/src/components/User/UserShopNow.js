import React, { useState } from "react";
import SidebarTwo from "../Sidebar/SidebarTwo";
import NavbarTwo from "../Navbar/NavbarTwo";
import ProductList from "../Content/ProductList";
import "./ShopNow.css";

const UserShopNow = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <NavbarTwo toggle={toggle} />
      <SidebarTwo isopen={isopen} toggle={toggle} />
      <div className="container-02">
        {/* <div
        style={{
          position: "absolute",
          margin: "15px",
          marginTop: "70px",
          fontSize: "20px",
        }}
      >
        UserShopNow
      </div> */}
        <div style={{ position: "absolute", marginTop: "100px" }}>
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default UserShopNow;
