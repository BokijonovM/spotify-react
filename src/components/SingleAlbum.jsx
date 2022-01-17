import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SingleAlbum = ({ albums, i }) => {
  return (
    <Container>
      <Col style={{ backgroundColor: "transparent" }}>
        <Row>
          <div
            style={{ marginRight: "80px", marginLeft: "90px" }}
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
            <div
              className="d-flex align-items-center"
              onClick={() => {
                let data = document.getElementById(".bi-heart-id");
                data.style.fontSize = "40px";
              }}
            >
              <i className="bi bi-heart" id="bi-heart-id"></i>
              <p className="mb-0 px-4">
                {parseInt(albums.duration / 60)}:
                {parseFloat(albums.duration % 60)
                  .toString()
                  .padStart(2, "0")}
              </p>
              <i className="bi bi-three-dots"></i>
            </div>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default SingleAlbum;
