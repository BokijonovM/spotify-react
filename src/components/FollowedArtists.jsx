import React from "react";
import MySidebar from "./MySidebar";
import MainNav from "./MainNav";
import { Row, Col, Container, Card, Badge } from "react-bootstrap";
import MyFooter from "./MyFooter";
import { connect } from "react-redux";
import { removeFromArtistCartAction } from "../redux/action";
import { Link } from "react-router-dom";
import logo from "./image.jpg";

const mapStateToProps = (state) => ({
  artistCart: state.artistCart.artists,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromArtistCart: (index) => {
    dispatch(removeFromArtistCartAction(index));
  },
});

function FollowedArtists({ artistCart, removeFromArtistCart }) {
  console.log(artistCart);
  return (
    <div>
      <Row>
        <Col
          md={2}
          className="p-0"
          style={{ backgroundColor: "black", zIndex: "3" }}
        >
          <MySidebar />
        </Col>
        <Col
          md={10}
          className="px-0 pt-0 bg-light main-background-color-1"
          style={{ paddingBottom: "120px" }}
        >
          <MainNav />
          <Row className="d-flex align-items-end mb-5">
            <img
              className="shadow-needed"
              style={{
                height: "200px",
                marginTop: "100px",
                marginLeft: "100px",
              }}
              src={logo}
            />
            <div
              style={{
                marginTop: "100px",
                marginLeft: "20px",
              }}
            >
              <h6>PLAYLIST</h6>
              <h1 className="mb-0">Your Library</h1>
            </div>
          </Row>
          <Row
            className="mt-5"
            style={{
              marginRight: "40px",
              marginLeft: "70px",
              marginBottom: "100px",
            }}
          >
            {artistCart.map((artist, i) => {
              return (
                <Col
                  xs={12}
                  sm={6}
                  md={3}
                  style={{ backgroundColor: "transparent" }}
                >
                  <Row className="">
                    <div className="pt-3 px-2 d-flex justify-content-between w-100">
                      <Card
                        style={{
                          backgroundColor: "#181818",
                          color: "white",
                          position: "relative",
                        }}
                        className="border-0 card my-2 mx-0 p-3 shadow-needed hover-for-badge"
                        key={artist.id}
                      >
                        <div className="p-relative-for-badge">
                          <Card.Img variant="top" src={artist.picture_medium} />
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
                              className="card-artist-namee w-100 ml-n3"
                              to={"/artist/" + artist.id}
                              style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "14px",
                              }}
                            >
                              {artist.name.slice(0, 15) + "..."}
                            </Link>
                          </Card.Title>
                        </Card.Body>
                        <Badge
                          className="p-absolute-for-cart"
                          onClick={() => {
                            removeFromArtistCart(i);
                          }}
                        >
                          <i
                            style={{
                              fontSize: "25px",
                              color: "#1db954 !important",
                            }}
                            class="bi bi-x-circle-fill"
                          ></i>
                        </Badge>
                      </Card>
                    </div>
                  </Row>
                </Col>
              );
            })}
          </Row>
          <MyFooter />
        </Col>
      </Row>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowedArtists);
