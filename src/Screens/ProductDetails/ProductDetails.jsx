import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../../Components/Apis/Apis";
import Rating from "../../Components/Rating/Rating";

const ProductDetails = () => {
  // Get Product ID from Params
  let idProduct = useParams();
  console.log(idProduct.id);

  const [details, setDetails] = useState([]);

  async function getProduct() {
    let productDetails = await getSingleProduct(idProduct.id);
    setDetails(productDetails);
  }

  console.log(details);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={details.thumbnail} alt={details.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{details.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={details.rating} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${details.price}</ListGroup.Item>
            <ListGroup.Item>
              <p>Description: {details.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${details.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{details.stock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block w-100"
                  type="button"
                  disabled={details.stock === 0}
                >
                  Add To Card
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
