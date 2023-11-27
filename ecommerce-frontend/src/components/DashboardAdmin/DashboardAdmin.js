import React, { useState } from "react";
import NavbarOne from "../Navbar/NavbarOne";
import SidebarOne from "../Sidebar/SidebarOne";
import "./Admin.css";

function DashboardAdmin() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
      <NavbarOne toggle={toggle} />
      <SidebarOne isopen={isopen} toggle={toggle} />
      <div className="container-06">
        <h2>Admin Dashboard</h2>
        {/* Add product and remove product functionality */}
      </div>
    </>
  );
}

export default DashboardAdmin;
