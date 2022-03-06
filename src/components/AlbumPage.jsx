import React from "react";
import MySidebar from "./MySidebar";
import { Row, Col, Container, Dropdown } from "react-bootstrap";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import SingleAlbum from "./SingleAlbum";

function AlbumPage() {
  const params = useParams();
  console.log("PARAMS!!", typeof params.albumID);
  const [albums, setAlbums] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        let movieRes = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/album/" +
            params.albumID
        );

        if (movieRes.ok) {
          let musics = await movieRes.json();
          console.log(musics);
          setAlbums(musics);
          setIsLoading(false);
        } else {
          console.log("Sorry album error");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAlbum();
  }, [params.albumID]);

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
      {/* &#x25bc; */}
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
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
          <Col>
            {typeof albums === "undefined" ? (
              <h1>404 - Album NOT FOUND</h1>
            ) : albums ? (
              <Container>
                <Row className="d-flex align-items-end">
                  <img
                    className="shadow-needed"
                    style={{
                      height: "200px",
                      marginTop: "100px",
                      marginLeft: "100px",
                    }}
                    src={albums.cover_xl}
                  />
                  <div
                    style={{
                      marginTop: "100px",
                      marginLeft: "20px",
                    }}
                  >
                    <h6>ALBUM</h6>
                    <h2>{albums.title}</h2>
                    <h6 className="mb-0">
                      {albums.artist.name}
                      <i class="bi bi-dot"></i>
                      {albums.release_date}
                      <i class="bi bi-dot"></i>
                      {albums.nb_tracks} songs
                      <i class="bi bi-dot"></i>
                      {parseInt(albums.duration / "60")}h
                    </h6>
                  </div>
                </Row>
                <Row className="justify-content-center">
                  <div
                    className="pt-4 px-2 d-flex w-100 align-items-center"
                    style={{
                      marginRight: "150px",
                      marginLeft: "93px",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <i
                        style={{
                          fontSize: "50px",
                          color: "#1db954 !important",
                        }}
                        class="mr-4 bi bi-play-circle-fill"
                      ></i>
                      <i
                        style={{ fontSize: "30px" }}
                        class="mr-4 bi bi-heart"
                      ></i>
                      <div className="ml-auto d-flex align-items-center">
                        <Dropdown alignRight>
                          <Dropdown.Toggle
                            alignRight
                            as={CustomToggle}
                            id="dropdown-custom-components"
                            style={{ color: "black !important" }}
                          >
                            <i
                              className="bi bi-three-dots single-post-three-dots"
                              style={{ fontSize: "30px" }}
                            ></i>
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{ width: "240px" }}
                            as={CustomMenu}
                            alignRight
                            className="bg-dark m-0 p-0"
                          >
                            <div className="post-dropdown">
                              <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                <p className="mb-0">Follow</p>
                              </div>
                              <div className="d-flex align-items-center  mb-0 mb-0 justify-content-between px-3 py-2 hover-for-dropdown-item">
                                <p className="mb-0">Go to artist radio</p>
                              </div>
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
                <Row className="justify-content-center">
                  <div
                    className="pt-3 px-2 d-flex justify-content-between w-100"
                    style={{
                      marginRight: "150px",
                      marginLeft: "110px",
                    }}
                  >
                    <div className="d-flex">
                      <p className="pr-5 mb-0">#</p>
                      <p className="mb-0">Title</p>
                    </div>
                    <div>
                      <p className="mb-0">
                        <i class="bi bi-clock-history"></i>
                      </p>
                    </div>
                  </div>
                  <hr
                    style={{
                      color: "grey",
                      // backgroundColor: "#000000",
                      height: 0.5,
                      borderColor: "grey",
                      width: "80%",
                    }}
                  />
                </Row>
                <Row className="justify-content-center">
                  {isLoading ? (
                    <Loader />
                  ) : (
                    albums.tracks.data.map((album, i) => {
                      return <SingleAlbum key={i} albums={album} i={i} />;
                    })
                  )}
                </Row>
              </Container>
            ) : (
              <Loader />
            )}
          </Col>
        </Col>
        <MyFooter />
      </Row>
    </div>
  );
}

export default AlbumPage;
