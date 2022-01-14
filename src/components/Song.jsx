import React from "react";
// import "../style/Song.css";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Song = ({ albumCards }) => {
  console.log("hello", albumCards);
  return (
    <Col md={3} style={{ backgroundColor: "transparent" }}>
      <Card key={albumCards.id}>
        <Card.Img variant="top" src={albumCards.album.cover_medium} />
        <Card.Body>
          <Card.Title>{albumCards.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Song;
