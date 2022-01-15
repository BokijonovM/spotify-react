import React from "react";
// import "../style/Song.css";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const SingleAlbum = ({ albums }) => {
  console.log("hello", albums);
  return (
    <Col xs={12} sm={6} md={3} style={{ backgroundColor: "transparent" }}>
      <h1>{albums.duration}</h1>
    </Col>
  );
};

export default SingleAlbum;
