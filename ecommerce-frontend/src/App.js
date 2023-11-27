import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import ShopNow from "./components/ShopNow/ShopNow";
import SignUp from "./components/SignUp/SignUp";
import AddProduct from "./components/Content/AddProduct";
import RemoveProduct from "./components/Content/RemoveProduct";
import NavbarOne from "./components/Navbar/NavbarOne";
import DashboardAdmin from "./components/DashboardAdmin/DashboardAdmin";
import DashboardUser from "./components/DashboardUser/DashboardUser";
import UserAbout from "./components/User/UserAbout";
import UserServices from "./components/User/UserServices";
import UserShopNow from "./components/User/UserShopNow";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      {/* <NavbarOne toggle={toggle} /> */}
      {/* <Navbar toggle={toggle}/>
      <Sidebar isopen={isopen} toggle={toggle} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboarduser" element={<DashboardUser />} />
        <Route path="/dashboardadmin" element={<DashboardAdmin />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/removeproduct" element={<RemoveProduct />} />
        <Route path="/shopnow" element={<ShopNow />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/user/shopnow" element={<UserShopNow />} />
        <Route path="/user/about" element={<UserAbout />} />
        <Route path="/user/services" element={<UserServices />} />
      </Routes>
    </>
  );
}

export default App;
