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
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=imagine",
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
      <Row className="responsive-needed">
        <Col md={2} className="p-0" style={{ backgroundColor: "black" }}>
          <MySidebar />
        </Col>
        <Col md={10} className="p-0 main-background-color">
          <MainNav />
          <div className="pt-5 ml-4 main-page-responsive">
            <Container>
              <Row>
                <h1 className="pt-4 pr-5" style={{ marginLeft: "80px" }}>
                  #THROWBACKTHURSDAY
                </h1>

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
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
      <MyFooter />
    </div>
  );
}

export default MyMain;
