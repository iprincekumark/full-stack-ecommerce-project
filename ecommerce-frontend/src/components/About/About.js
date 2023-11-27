import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./About.css";

const About = () => {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <div
        className="container-04"
        // style={{ position: "absolute", marginTop: "70px", fontSize: "20px" }}
      >
        About
      </div>
    </>
  );
};

export default About;
