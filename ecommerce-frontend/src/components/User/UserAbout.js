import React, { useState } from "react";
import SidebarTwo from "../Sidebar/SidebarTwo";
import NavbarTwo from "../Navbar/NavbarTwo";
import "./About.css";

const UserAbout = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <NavbarTwo toggle={toggle} />
      <SidebarTwo isopen={isopen} toggle={toggle} />
      <div
        className="container-04"
        // style={{ position: "absolute", marginTop: "70px", fontSize: "20px" }}
      >
        About
      </div>
    </>
  );
};

export default UserAbout;
