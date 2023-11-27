import React, { useState } from "react";
import SidebarTwo from "../Sidebar/SidebarTwo";
import NavbarTwo from "../Navbar/NavbarTwo";
import "./Services.css";

const UserServices = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <NavbarTwo toggle={toggle} />
      <SidebarTwo isopen={isopen} toggle={toggle} />
      <div
        className="container-05"
        // style={{ position: "absolute", marginTop: "70px", fontSize: "20px" }}
      >
        Services
      </div>
    </>
  );
};

export default UserServices;
