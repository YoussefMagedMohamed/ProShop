import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded text-center">
        <Link to={`/productDetails/${product._id}`}>
          <Card.Img src={product.image}></Card.Img>
        </Link>
        <Link to={`/productDetails/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card>
    </>
  );
};

export default Product;
