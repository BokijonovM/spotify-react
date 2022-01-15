import React from "react";
import MySidebar from "./MySidebar";
import { Row, Col, Container, Card } from "react-bootstrap";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import SingleAlbum from "./SingleAlbum";
import Loader from "./Loader";

function AlbumPage() {
  const params = useParams();
  // params is ALWAYS going to be an object!
  console.log("PARAMS!!", typeof params.albumID);
  const [albums, setAlbums] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/album/" +
            +params.albumID,
          {
            method: "GET",
            headers: new Headers({
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
              "X-RapidAPI-Key":
                "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
            }),
          }
          //   {
          //     method: "GET",
          //   }
        );

        if (response.ok) {
          let data = await response.json();
          console.log("DATA", data);
          setAlbums(data);
          setIsLoading(false);
        } else {
          console.log("Sorry");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMusic();
  }, []);

  return (
    <div>
      <Row>
        <Col md={2} className="p-0 bg-dark">
          <MySidebar />
        </Col>
        <Col md={10} className="p-0 bg-light">
          <MainNav />
          <div className="">
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
                <Row
                  className="pt-4 ml-5 pr-5"
                  style={{ marginBottom: "120px" }}
                >
                  {isLoading ? <Loader /> : <h1>{albums.id}</h1>}
                </Row>
              </Row>
            </Container>
          </div>
        </Col>
        <MyFooter />
      </Row>
    </div>
  );
}

export default AlbumPage;
