import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Col } from "react-bootstrap";

const SingleSong = ({ albumCards }) => {
  return (
    <Col xs={12} sm={6} md={3} style={{ backgroundColor: "transparent" }}>
      <Card
        style={{ backgroundColor: "#181818", color: "white" }}
        className="border-0 card my-2 p-3 shadow-needed hover-for-badge"
        key={albumCards.id}
      >
        <div className="p-relative-for-badge">
          <Card.Img variant="top" src={albumCards.album.cover_medium} />
          <Badge className="p-absolute-for-img">
            <i
              style={{
                fontSize: "40px",
                color: "#1db954 !important",
              }}
              class="bi bi-play-circle-fill"
            ></i>
          </Badge>
        </div>

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
