import React from "react";
import products from "../../products";
import { Col, Row } from "react-bootstrap";
import Product from "../Product/Product";

const Home = () => {
  // console.log(Hello);
  console.log(products);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, index) => (
          <Col sm={12} md={6} lg={4} xl={3} key={index}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
