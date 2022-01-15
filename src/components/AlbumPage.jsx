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
        } else {
          console.log("Sorry album error");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAlbum();
  }, [params.albumID]);

  return (
    <div>
      <Row>
        <Col md={2} className="p-0 bg-dark">
          <MySidebar />
        </Col>
        <Col md={10} className="p-0 bg-light main-background-color-1">
          <MainNav />
          <Col>
            {typeof albums === "undefined" ? (
              <h1>404 - Album NOT FOUND</h1>
            ) : albums ? (
              <Container>
                <Row className="d-flex align-items-center">
                  <img
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
                    <h2>{albums.artist.name}</h2>
                    <h6>{albums.nb_tracks} SONGS</h6>
                  </div>
                </Row>
                <Row className="justify-content-center">
                  <div
                    className="pt-5 d-flex justify-content-between w-100"
                    style={{
                      paddingRight: "170px",
                      paddingLeft: "170px",
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
                    albums.map(album => {
                      return (
                        <div
                          style={{
                            paddingRight: "170px",
                            paddingLeft: "170px",
                          }}
                          className=" d-flex justify-content-between w-100"
                        >
                          <div className="d-flex">
                            <p className="pr-5">{album.tracks.id}</p>
                            <p>Queen</p>
                          </div>
                          <div>
                            <p>{album.tracks.duration}</p>
                          </div>
                        </div>
                      );
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

{
  /* <div className="">
  <Container>
    <Row>
      <div className="d-flex align-items-center">
        <img
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
          <h2>{albums.artist.name}</h2>
          <h6>{albums.nb_tracks} SONGS</h6>
        </div>
      </div>
      <div
        style={{ paddingRight: "170px", paddingLeft: "170px" }}
        className=" pt-5 d-flex justify-content-between w-100"
      >
        <div className="d-flex">
          <p className="pr-5">{albums.tracks.id}</p>
          <p>Queen</p>
        </div>
        <div>
          <p>{albums.tracks.duration}</p>
        </div>
      </div>
      <Row className="pt-4 ml-5 pr-5" style={{ marginBottom: "120px" }}>
        {isLoading ? <Loader /> : <h1>{albums.id}</h1>}
      </Row>
    </Row>
  </Container>
</div>; */
}
