import React from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";

const SingleSong = ({ albumCards }) => {
  return (
    <Col xs={12} sm={6} md={3} style={{ backgroundColor: "transparent" }}>
      <Card
        style={{ backgroundColor: "#181818", color: "white" }}
        className="border-0 card my-2 p-3 shadow-needed"
        key={albumCards.id}
      >
        <Card.Img
          className="shadow-needed"
          variant="top"
          src={albumCards.album.cover_medium}
        />
        <Card.Body>
          <Card.Title>
            <a
              href={"/album/" + albumCards.album.id}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "16px",
              }}
              className="card-album-title ml-n3"
            >
              {albumCards.title}
            </a>
          </Card.Title>
          <a
            className="card-artist-name ml-n3"
            href={"/artist/" + albumCards.artist.id}
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
            {albumCards.artist.name}
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleSong;
