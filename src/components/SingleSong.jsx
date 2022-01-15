import React from "react";
// import "../style/Song.css";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const SingleSong = ({ albumCards }) => {
  console.log("hello", albumCards);
  return (
    <Col xs={12} sm={6} md={3} style={{ backgroundColor: "transparent" }}>
      <Card
        style={{ backgroundColor: "#161616", color: "white" }}
        className="border-0 card"
        key={albumCards.id}
      >
        <Card.Img
          className="p-3"
          variant="top"
          src={albumCards.album.cover_medium}
        />
        <Card.Body>
          <Card.Title>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
              {albumCards.title}
            </a>
          </Card.Title>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            {albumCards.artist.name}{" "}
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleSong;
