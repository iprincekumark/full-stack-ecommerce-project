import React, { useState } from "react";
import "./Services.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Services = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <div
        className="container-05"
        // style={{ position: "absolute", marginTop: "70px", fontSize: "20px" }}
      >
        Services
      </div>
    </>
  );
};

export default Services;
