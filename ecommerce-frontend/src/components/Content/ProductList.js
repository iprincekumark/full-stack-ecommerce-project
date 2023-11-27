import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import Button from "@mui/material/Button";

const ProductCard = ({ title, description, price, imageUrl, onImageClick }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
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
        <Button size="small" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default function ProductList() {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [products, setProducts] = useState([]);

  const openImagePopup = (imageUrl) => {
    setEnlargedImage(imageUrl);
  };

  const closeImagePopup = () => {
    setEnlargedImage(null);
  };

  useEffect(() => {
    // Fetch product data from the server when the component mounts
    fetch("http://localhost:5000/api/products") // Update the URL to match your API endpoint
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error while fetching products:", error));
  }, []);

  return (
    <div>
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
          justifyContent: "space-between",
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
          />
        ))}
      </div>
    </div>
  );
}
