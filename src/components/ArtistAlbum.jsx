import React from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";

function ArtistAlbum({ songs }) {
  return (
    <Row className="mb-5  mr-n5">
      {songs.map((song) => {
        return (
          <Col xs={12} sm={6} md={3} style={{ backgroundColor: "transparent" }}>
            <Card
              style={{ backgroundColor: "#181818", color: "white" }}
              className="border-0 card my-2 mx-0 p-3 shadow-needed hover-for-badge"
              key={song.id}
            >
              <div className="p-relative-for-badge">
                <Card.Img variant="top" src={song.album.cover_medium} />
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
                    href={"/album/" + song.album.id}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                    className="card-album-title ml-n3"
                  >
                    {song.title}
                  </a>
                </Card.Title>
                <a
                  className="card-artist-name ml-n3"
                  href={"/artist/" + song.artist.id}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {song.artist.name}
                </a>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default ArtistAlbum;
