import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <div className="my-3">
            {product.rating} from {product.numReviews} reviewer
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card>
    </>
  );
};

export default Product;
