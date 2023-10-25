import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <CardGroup>
        <Card className="my-3 p-3 rounded text-center h-100 w-100">
          <Link to={`/productDetails/${product.id}`}>
            <Card.Img src={product.thumbnail} className="w-100" ></Card.Img>
          </Link>
          <Link to={`/productDetails/${product.id}`}>
            <Card.Title as="div" className="my-3">
              <strong>{product.title}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating value={product.rating} />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card>
      </CardGroup>
    </>
  );
};

export default Product;
