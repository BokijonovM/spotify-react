import React from "react";
import MySidebar from "./MySidebar";
import { Row, Col } from "react-bootstrap";
import MainNav from "./MainNav";
import MyFooter from "./MyFooter";
import { useState, useEffect } from "react";

function MyMain() {
  const [albumCard, setAlbumCard] = useState("");

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
        );

        if (response.ok) {
          let data = response.json();
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
            <h1>hi</h1>
          </div>
        </Col>
        <MyFooter />
      </Row>
    </div>
  );
}

export default MyMain;
