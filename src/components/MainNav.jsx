import React from "react";
import { Navbar, Button } from "react-bootstrap";

function MainNav() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="main-nav d-flex justify-content-center align-items-center"
        variant="light"
        bg="transparent"
      >
        <div className="d-flex main-nav-h6-text justify-content-center">
          <h6>
            <a
              className="text-dark"
              style={{ textDecoration: "none" }}
              href="/artist"
            >
              TRENDING
            </a>
          </h6>
          <h6>
            <a
              className="text-dark"
              style={{ textDecoration: "none" }}
              href="/album"
            >
              TRENDING
            </a>
          </h6>
          <h6>MOOD AND GENRES</h6>
          <h6>NEW RELEASES</h6>
          <h6>DISCOVER</h6>
        </div>
      </Navbar>
    </div>
  );
}

export default MainNav;
