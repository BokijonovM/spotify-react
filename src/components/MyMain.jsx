import React from "react";
import MySidebar from "./MySidebar";
import { Row, Col, Container, Card } from "react-bootstrap";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { useState, useEffect } from "react";
import SingleSong from "./SingleSong";
import Loader from "./Loader";

function MyMain() {
  const [albumCards, setAlbumCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem",
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
          let { data } = await response.json();
          console.log(data);
          setAlbumCards(data);
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
    <div className="home-page-div">
      <Row>
        <Col md={2} className="p-0" style={{ backgroundColor: "black" }}>
          <MySidebar />
        </Col>
        <Col md={10} className="p-0 main-background-color">
          <MainNav />
          <div className="pt-5 ml-4">
            <Container>
              <Row>
                <h1 className="pt-4 pr-5" style={{ marginLeft: "80px" }}>
                  #THROWBACKTHURSDAY
                </h1>
                {/* <Col className="d-flex flex-column align-items-start">
                  <img
                    className="my-4"
                    src={albumCard.artist}
                    alt="albumCard1"
                  />
                  <h2 style={{ textAlign: "start" }}>{albumCard.title}</h2>
                </Col> */}
                {/* <Card className="ml-5 mt-5" style={{ marginBottom: "390px" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "150px" }}
                    src={albumCard.artist.picture}
                  />
                  <Card.Body>
                    <Card.Title>{albumCard.title}</Card.Title>
                  </Card.Body>
                </Card> */}
                <Row
                  className="pt-4 ml-5 pr-5"
                  style={{ marginBottom: "120px" }}
                >
                  {isLoading ? (
                    <Loader />
                  ) : (
                    albumCards.map(albumCard => {
                      return <SingleSong albumCards={albumCard} />;
                    })
                  )}
                </Row>

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

export default MyMain;
