import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded text-center">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image}></Card.Img>
        </a>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card>
    </>
  );
};

export default Product;
