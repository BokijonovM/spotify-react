import React from "react";
import MySidebar from "./MySidebar";
import { Row, Col, Container, Button } from "react-bootstrap";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import ArtistAlbum from "./ArtistAlbum";

function AlbumPage() {
  const params = useParams();
  const [artists, setArtists] = useState({});
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ArtistId = params.artistID;
    ArtistId ? fetchAlbum(ArtistId) : fetchAlbum("17");

    // fetchAlbum();
  }, []);

  const fetchAlbum = async (ArtistId) => {
    try {
      let movieRes = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + ArtistId
      );

      if (movieRes.ok) {
        let musics = await movieRes.json();
        console.log(musics);
        setArtists(musics);
        setIsLoading(false);
        const fetchWithName = async () => {
          let headers = new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
          });
          console.log("hello hi hu");
          try {
            let trackRes = await fetch(
              "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
                musics.name,
              {
                method: "GET",
                headers,
              }
            );
            if (trackRes.ok) {
              let trackList = await trackRes.json();
              setSongs(trackList.data);
              console.log("trackList", trackList);
            } else {
              console.log("fetch artist with name error!");
            }
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchWithName();
      } else {
        console.log("Sorry album error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col
          md={2}
          className="p-0 sidebar-920-d-none"
          style={{ backgroundColor: "black", zIndex: "3" }}
        >
          <MySidebar />
        </Col>
        <Col md={10} className="p-0 bg-light main-background-color-1">
          <MainNav />
          <Col>
            {typeof artists === "undefined" ? (
              <h1>404 - Artist NOT FOUND</h1>
            ) : artists ? (
              <Container fluid className="">
                <Row className="d-flex justify-content-center align-items-center">
                  <img
                    className="artist-main-image-banner"
                    style={{
                      height: "350px",
                      width: "100%",
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
                    <h5 className="mb-0 pl-1">
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
                    <h6 className="pl-1" style={{ fontWeight: "bolder" }}>
                      {artists.nb_fan} monthly listeners {artists.nb_album}{" "}
                      albums
                    </h6>
                  </div>
                </Row>
                <Row className="justify-content-center">
                  <div
                    className="pt-4 px-2 w-100 align-items-center"
                    style={{
                      marginRight: "80px",
                      marginLeft: "60px",
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
                      <Button
                        className="mr-4 py-1 px-3 following-needed shadow-none"
                        variant="outline-secondary"
                        onClick={() => {
                          let follow = (document.querySelector(
                            ".following-needed"
                          ).innerHTML = "FOLLOWING");
                        }}
                        onDoubleClick={() => {
                          let follow = (document.querySelector(
                            ".following-needed"
                          ).innerHTML = "FOLLOW");
                        }}
                      >
                        FOLLOW
                      </Button>
                      <i
                        style={{ fontSize: "30px" }}
                        class="mr-4 bi bi-three-dots"
                      ></i>
                    </div>
                    <div>
                      <h4>Popular releases</h4>
                    </div>
                  </div>
                </Row>
                <Row className=" mr-n5">
                  <div
                    className="pt-3 px-2 d-flex justify-content-between w-100"
                    style={{
                      marginRight: "80px",
                      marginLeft: "60px",
                      marginBottom: "100px",
                    }}
                  >
                    <ArtistAlbum songs={songs} />
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
