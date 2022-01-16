import React from "react";
import MySidebar from "./MySidebar";
import { Row, Col, Container, Button } from "react-bootstrap";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import "./style.css";

function AlbumPage() {
  const params = useParams();
  console.log("PARAMS!!", typeof params.albumID);
  const [artists, setArtists] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        let movieRes = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
            params.artist2ID
        );

        if (movieRes.ok) {
          let musics = await movieRes.json();
          console.log(musics);
          setArtists(musics);
          setIsLoading(false);
        } else {
          console.log("Sorry album error");
        }
      } catch (err) {
        // console.log(err)
      }
    };

    fetchAlbum();
  }, [params.artist2ID]);

  return (
    <div>
      <Row>
        <Col md={2} className="p-0" style={{ backgroundColor: "black" }}>
          <MySidebar />
        </Col>
        <Col md={10} className="p-0 bg-light main-background-color-1">
          <MainNav />
          <Col>
            {typeof artists === "undefined" ? (
              <h1>404 - Artist NOT FOUND</h1>
            ) : artists ? (
              <Container>
                <Row className="align-items-center ">
                  <Col
                    className="d-flex align-items-center position-fixed-needed flex-column justify-content-center"
                    style={{ height: "100vh" }}
                  >
                    <Row className="d-flex flex-column align-items-center">
                      <img
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                        src={artists.picture_xl}
                      />
                      <div className="d-flex flex-column align-items-center">
                        <h1 className="mb-0">
                          {/* style={{ fontSize: "56px" }} */}
                          {artists.name.slice(0, 10) + "..."}
                        </h1>
                        <h6 className="pl-1" style={{ fontWeight: "bolder" }}>
                          {artists.nb_fan} monthly listeners
                        </h6>
                      </div>
                      <div className="my-3 d-flex align-items-center">
                        <Button
                          className="nav-btn shadow-none px-5 border-0"
                          style={{ backgroundColor: "#1db954" }}
                        >
                          PLAY
                        </Button>
                      </div>
                      <div>
                        <h6 className="pl-1" style={{ fontWeight: "bolder" }}>
                          {artists.nb_album}
                          <span className="ml-1">albums</span>
                        </h6>
                      </div>

                      <div
                        className=" d-flex justify-content-center"
                        style={
                          {
                            // marginRight: "150px",
                            // marginLeft: "20px",
                          }
                        }
                      >
                        <div className="d-flex align-items-center">
                          {/* <i
                            style={{
                              fontSize: "50px",
                              color: "#1db954 !important",
                            }}
                            class="mr-4 bi bi-play-circle-fill"
                          ></i> */}
                          <i
                            style={{ fontSize: "30px" }}
                            class="mr-4 bi bi-heart"
                          ></i>
                          <i
                            style={{ fontSize: "30px" }}
                            class="mr-4 bi bi-three-dots"
                          ></i>
                        </div>
                      </div>
                    </Row>
                  </Col>

                  <Col>
                    <Row className="justify-content-end">
                      <div
                        className="pt-3 px-2justify-content-between w-100"
                        style={{
                          marginTop: "50px",
                          marginLeft: "400px",
                        }}
                      >
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>

                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>

                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>
                        <h2>Popular</h2>

                        <h2>Popular</h2>

                        <h2>Popular</h2>
                        <h2>Popular</h2>
                      </div>
                    </Row>

                    {/* <Row className="justify-content-center"></Row> */}
                  </Col>
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

// <div
//                     className="pt-5 d-flex justify-content-between w-100"
//                     style={{
//                       paddingRight: "170px",
//                       paddingLeft: "170px",
//                     }}
//                   >
//                     <div className="d-flex">
//                       <p className="pr-5 mb-0">#</p>
//                       <p className="mb-0">Title</p>
//                     </div>
//                     <div>
//                       <p className="mb-0">
//                         <i class="bi bi-clock-history"></i>
//                       </p>
//                     </div>
//                   </div>
//                   <hr
//                     style={{
//                       color: "grey",
//                       // backgroundColor: "#000000",
//                       height: 0.5,
//                       borderColor: "grey",
//                       width: "80%",
//                     }}
//                   />
