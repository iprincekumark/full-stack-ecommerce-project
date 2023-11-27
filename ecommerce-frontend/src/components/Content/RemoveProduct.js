import React, { useState, useEffect } from "react";
import NavbarOne from "../Navbar/NavbarOne";
import SidebarOne from "../Sidebar/SidebarOne";
import "./RemoveProduct.css";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

const ProductCard = ({
  title,
  description,
  price,
  imageUrl,
  onImageClick,
  onDeleteClick,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginTop: "80px",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <CardActionArea onClick={onImageClick}>
        <div
          style={{
            backgroundColor: "black",
            paddingTop: "50%", // 6:4 aspect ratio (4/6 = 0.67)
            position: "relative",
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Price: {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onDeleteClick}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default function RemoveProduct() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  const [enlargedImage, setEnlargedImage] = useState(null);
  const [products, setProducts] = useState([]);

  const openImagePopup = (imageUrl) => {
    setEnlargedImage(imageUrl);
  };

  const closeImagePopup = () => {
    setEnlargedImage(null);
  };

  const deleteProduct = (productId) => {
    // Send a DELETE request to remove the product from the server
    fetch(`http://localhost:5000/api/remove-product/${productId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Remove the product from the client-side state
          setProducts(products.filter((product) => product._id !== productId));
        } else {
          console.error("Error while deleting product");
        }
      })
      .catch((error) => {
        console.error("Error while deleting product:", error);
      });
  };

  useEffect(() => {
    // Fetch product data from the server when the component mounts
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error while fetching products:", error));
  }, []);

  return (
    <>
      <NavbarOne toggle={toggle} />
      <SidebarOne isopen={isopen} toggle={toggle} />
      <div className="container-03">
        {enlargedImage && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
            onClick={closeImagePopup}
          >
            <img
              src={enlargedImage}
              alt="Enlarged Product"
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              onImageClick={() => openImagePopup(product.imageUrl)}
              onDeleteClick={() => deleteProduct(product._id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
