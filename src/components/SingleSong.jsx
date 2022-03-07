import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "16px",
              }}
              className="card-album-title ml-n3"
              to={"/album/" + albumCards.album.id}
            >
              <p className="mb-0">{albumCards.title}</p>
            </Link>
          </Card.Title>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
            }}
            className="card-album-title ml-n3"
            to={"/album/" + albumCards.album.id}
          >
            <p className="mb-0">{albumCards.artist.name}</p>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleSong;
