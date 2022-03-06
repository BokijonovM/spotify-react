import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function ArtistAlbum({ songs }) {
  return (
    <Row className="mb-5  mr-n5">
      {songs.map((song) => {
        return (
          <Col xs={12} sm={6} md={3} style={{ backgroundColor: "transparent" }}>
            <Card
              style={{ backgroundColor: "#181818", color: "white" }}
              className="border-0 card my-2 mx-0 p-3"
              key={song.id}
            >
              <Card.Img
                className="shadow-needed"
                variant="top"
                src={song.album.cover_medium}
              />
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
