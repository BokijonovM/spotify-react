import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { selectSongAction } from "../redux/action";
import { removeFromCartAction } from "../redux/action";
import MySidebar from "./MySidebar";
import logo from "./image.jpg";

const mapStateToProps = (state) => ({
  albumCart: state.albumCart.albums,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (index) => {
    dispatch(removeFromCartAction(index));
  },
  selectedMusic: (musicToAdd) => {
    dispatch(selectSongAction(musicToAdd));
  },
});

function LikedSongs({ selectedMusic, removeFromCart, albumCart }) {
  const navigate = useNavigate();
  const convertToTime = (time) => (time < 10 ? `0${time}` : time);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      style={{ color: "black" }}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <div className="mx-3 d-flex justify-content-center"></div>
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );
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
              <h1 className="mb-0">Liked Songs</h1>
            </div>
          </Row>
          {albumCart.map((albums, i) => {
            return (
              <Container>
                <Col style={{ backgroundColor: "transparent" }}>
                  <Row>
                    <div
                      onClick={() => selectedMusic(albums)}
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
                      <div className="d-flex align-items-center">
                        <i
                          className="bi bi-heart d-none-block-love"
                          id="bi-heart-id"
                          onClick={() => {
                            removeFromCart(i);
                          }}
                        ></i>
                        <p className="mb-0 px-4">
                          {convertToTime(parseInt(albums.duration / 60))}:
                          {convertToTime(albums.duration % 60)}
                        </p>
                        <div className="ml-auto d-flex align-items-center">
                          <Dropdown alignRight>
                            <Dropdown.Toggle
                              alignRight
                              as={CustomToggle}
                              id="dropdown-custom-components"
                              style={{ color: "black !important" }}
                            >
                              <i className="bi bi-three-dots single-post-three-dots d-none-block-love"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                              style={{ width: "240px" }}
                              as={CustomMenu}
                              alignRight
                              className="bg-dark m-0 p-0"
                            >
                              <div className="post-dropdown">
                                <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                  <p className="mb-0">Add to queue</p>
                                </div>
                                <hr
                                  className="m-0"
                                  style={{ background: "grey" }}
                                ></hr>
                                <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                  <p className="mb-0">Go to song radio</p>
                                </div>
                                <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                  <p className="mb-0">Go to album</p>
                                </div>
                                <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                  <p className="mb-0">Show credits</p>
                                </div>
                                <hr
                                  className="m-0"
                                  style={{ background: "grey" }}
                                ></hr>
                                <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                  <p className="mb-0">
                                    Save to your Liked Songs
                                  </p>
                                </div>
                                <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                  <p className="mb-0">Add to playlist</p>
                                </div>
                                <hr
                                  className="m-0"
                                  style={{ background: "grey" }}
                                ></hr>
                                <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                  <p className="mb-0">Share</p>
                                </div>
                                <hr
                                  className="m-0"
                                  style={{ background: "grey" }}
                                ></hr>
                                <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                  <p className="mb-0">Open in Desktop app</p>
                                </div>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
                <MyFooter />
              </Container>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs);
