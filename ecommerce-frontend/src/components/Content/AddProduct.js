import React, { useState } from "react";
import NavbarOne from "../Navbar/NavbarOne";
import SidebarOne from "../Sidebar/SidebarOne";
import "./AddProduct.css"; // Import the CSS file

export default function AddProduct() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  const [message, setMessage] = useState("");
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        console.log("Product registered successfully");
        setMessage("Product registered successfully");
        // You can redirect the user or show a success message here
      } else {
        console.error("Product registration failed");
        setMessage("Product registration failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("Product registration failed");
    }
  };

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <NavbarOne toggle={toggle} />
      <SidebarOne isopen={isopen} toggle={toggle} />
      <div className="form-container">
        <h2 className="form-title">Add a New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Title:</label>
            <input
              type="text"
              name="title"
              value={productData.title}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Description:</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="textarea"
            />
          </div>
          <div className="form-group">
            <label className="label">Price:</label>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Add Product
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}
