import React from "react";
import MySidebar from "./MySidebar";
import { Row, Col, Container } from "react-bootstrap";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";

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
            params.artistID
        );

        if (movieRes.ok) {
          let musics = await movieRes.json();
          console.log(musics);
          setArtists(musics);
        } else {
          console.log("Sorry album error");
        }
      } catch (err) {
        // console.log(err)
      }
    };

    fetchAlbum();
  }, [params.artistID]);

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
                <Row className="d-flex align-items-center">
                  <img
                    style={{
                      //   height: "200px",
                      //   marginTop: "100px",
                      //   marginLeft: "100px",
                      height: "350px",
                      width: "100vw",
                      objectFit: "cover",
                      objectPosition: "top",
                      position: "relative",
                    }}
                    src={artists.picture_xl}
                  />
                  <div
                    style={{
                      marginTop: "100px",
                      marginLeft: "20px",
                      position: "absolute",
                      left: "100px",
                    }}
                  >
                    <h5 className="mb-0 pl-2">
                      {" "}
                      <i
                        style={{ color: "#2e77d0 !important" }}
                        class="bi bi-patch-check-fill pr-2"
                      ></i>
                      Verified artist
                    </h5>
                    <h1 className="mb-0" style={{ fontSize: "56px" }}>
                      {artists.name}
                    </h1>
                    <h6 className="pl-2" style={{ fontWeight: "bolder" }}>
                      {artists.nb_fan} monthly listeners {artists.nb_album}{" "}
                      albums
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
                      <i
                        style={{ fontSize: "30px" }}
                        class="mr-4 bi bi-three-dots"
                      ></i>
                    </div>
                  </div>
                </Row>
                <Row className="justify-content-center">
                  <div
                    className="pt-3 px-2 d-flex justify-content-between w-100"
                    style={{
                      marginRight: "150px",
                      marginLeft: "100px",
                    }}
                  >
                    <h2>Popular</h2>
                  </div>
                </Row>

                <Row className="justify-content-center"></Row>
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
