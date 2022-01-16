import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SingleArtist = ({ albums }) => {
  //   console.log("hello", albums);
  return (
    <Container>
      <Col style={{ backgroundColor: "transparent" }}>
        <Row>
          <div
            style={{ marginRight: "130px", marginLeft: "90px" }}
            className="px-3 py-1 my-1 d-flex justify-content-between align-items-center w-100 single-album-hover-needed"
          >
            <div className="d-flex align-items-center ">
              <p className="pr-5 mb-0">1</p>
              <div>
                <p className="mb-0" style={{ fontSize: "16px" }}>
                  {albums.title}
                </p>
                <p
                  className="mb-0 text-muted mt-n1"
                  style={{ fontSize: "14px" }}
                >
                  {albums.artist.name}
                </p>
              </div>
            </div>
            <div>
              <p className="mb-0">{albums.duration}</p>
            </div>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default SingleArtist;
