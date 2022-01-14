import React from "react";
import MySidebar from "./MySidebar";
import { Row, Col, Container, Card } from "react-bootstrap";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { useState, useEffect } from "react";

function ArtistPage() {
  const [albumCard, setAlbumCard] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/artist/412",
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
          console.log(data);
          setAlbumCard(data);
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
                <div>
                  <img
                    style={{
                      height: "300px",
                      width: "100vw",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    src="https://e-cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/1000x1000-000000-80-0-0.jpg"
                  />
                </div>
                <div
                  style={{ paddingRight: "170px", paddingLeft: "70px" }}
                  className=" pt-5 d-flex justify-content-between w-100"
                >
                  <div className="d-flex">
                    <p className="pr-5">1</p>
                    <p>Eminem</p>
                  </div>
                  <div>
                    <p>4:11</p>
                  </div>
                </div>

                {/* <Col className="d-flex flex-column align-items-start">
                  <img
                    className="my-4"
                    src={albumCard.artist}
                    alt="albumCard1"
                  />
                  <h2 style={{ textAlign: "start" }}>{albumCard.title}</h2>
                </Col> */}
                {/* <Card className="pl-5 ml-5">
                  <Card.Img variant="top" src={albumCard.album.cover_small} />
                  <Card.Body>
                    <Card.Title>{albumCard.title}</Card.Title>
                  </Card.Body>
                </Card> */}

                {/* {albumCard.map((album, i) => {
                  return (
                    <Card key={i}>
                      <Card.Img
                        variant="top"
                        className="card-img1"
                        src={album.artist.picture}
                      />
                      <Card.Body>
                        <Card.Title>
                          <h2>{album.title}</h2>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  );
                })} */}
              </Row>
            </Container>
          </div>
        </Col>
        <MyFooter />
      </Row>
    </div>
  );
}

export default ArtistPage;
