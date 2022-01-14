import React from "react";
import MySidebar from "./MySidebar";
import { Row, Col, Container, Card } from "react-bootstrap";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { useState, useEffect } from "react";

function MyMain() {
  const [albumCard, setAlbumCard] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen",
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
        <Col md={3} className="p-0 bg-dark">
          <MySidebar />
        </Col>
        <Col md={9} className="p-0 bg-light">
          <MainNav />
          <div className="pt-5">
            <Container>
              <Row>
                {/* <Col className="d-flex flex-column align-items-start">
                  <img
                    className="my-4"
                    src={albumCard.artist}
                    alt="albumCard1"
                  />
                  <h2 style={{ textAlign: "start" }}>{albumCard.title}</h2>
                </Col> */}
                <Card className="ml-5 mt-5" style={{ marginBottom: "390px" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "150px" }}
                    src="https://th.bing.com/th/id/OIP.lC7JJR1gYH3_T1CdkT4zjwHaKp?pid=ImgDet&rs=1"
                  />
                  <Card.Body>
                    <Card.Title>title</Card.Title>
                  </Card.Body>
                </Card>

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
