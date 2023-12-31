import React, { useEffect, useState } from "react";
// import products from "../../products";
import { Col, Row } from "react-bootstrap";
import Product from "../../Components/Product/Product";
import { getAllProducts } from "../../Components/Apis/Apis";
import Loading from "../../Components/Loading/Loading";

const Home = () => {

  const [product , setProduct] = useState([])

  async function getData() {
    let data = await getAllProducts();
    setProduct(data)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      {product.length > 0 ? (<>
        <h1>Latest Products</h1>
      <Row>
        {product.map((product, index) => (
          <Col sm={12} md={6} lg={4} xl={3} key={index}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      </>) : <Loading/>}
    </>
  );
};

export default Home;
