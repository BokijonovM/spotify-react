import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SingleAlbum = ({ albums, i }) => {
  return (
    <Container>
      <Col style={{ backgroundColor: "transparent" }}>
        <Row>
          <div
            style={{ marginRight: "130px", marginLeft: "90px" }}
            className="px-3 py-1 my-1 d-flex justify-content-between align-items-center w-100 single-album-hover-needed"
          >
            <div className="d-flex align-items-center ">
              <p className="pr-5 mb-0">{i + 1}</p>

              <div>
                <p className="mb-0" style={{ fontSize: "16px" }}>
                  {albums.title}
                </p>
                <p
                  className="mb-0 text-muted mt-n1"
                  style={{ fontSize: "14px" }}
                >
                  <a
                    className="mb-0 text-muted mt-n1"
                    style={{ fontSize: "14px" }}
                    href={"/artist/" + albums.artist.id}
                  >
                    {albums.artist.name}
                  </a>
                </p>
              </div>
            </div>
            <div>
              <p className="mb-0">
                {parseInt(albums.duration / 60)}:{albums.duration % 60}
              </p>
            </div>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default SingleAlbum;
