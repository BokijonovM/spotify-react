import React from "react";
import { Navbar } from "react-bootstrap";
import { useState } from "react";

function MainNav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <Navbar
        expand="lg"
        // className="main-nav d-flex justify-content-center align-items-center"
        className={navbar ? "navbar active" : "navbar"}
        variant="light"
        bg="transparent"
      >
        <div className="d-flex main-nav-h6-text justify-content-center">
          <h6>TRENDING</h6>
          <h6>PODCASTS</h6>
          <h6>MOOD AND GENRES</h6>
          <h6>NEW RELEASES</h6>
          <h6>DISCOVER</h6>
        </div>
      </Navbar>
    </div>
  );
}

export default MainNav;
