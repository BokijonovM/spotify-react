import React from "react";
import "./style.css";
import logo from "./logo.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MySidebar() {
  const username = useSelector((state) => state.user.name);
  return (
    <div className="sidebar-div pl-5">
      <div>
        <img className="pr-4 mt-3 pb-4 logo-sidebar" src={logo} alt="logo" />
      </div>

      <div className="hover-needed">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bolder",
            }}
            className="text-light d-flex align-items-center home-search-library py-1 mb-0 "
          >
            <i style={{ fontSize: "24px" }} class=" pr-3 bi bi-house-fill"></i>{" "}
            Home
          </p>
        </Link>
        <p
          style={{ fontSize: "14px", fontWeight: "bolder" }}
          className="text-light d-flex align-items-center home-search-library py-1 mb-0"
        >
          <i style={{ fontSize: "24px" }} class="pr-3 bi bi-search"></i> Search
        </p>
        <Link to="/followed-artists" style={{ textDecoration: "none" }}>
          <p
            style={{ fontSize: "14px", fontWeight: "bolder" }}
            className="text-light d-flex align-items-center home-search-library py-1 mb-0"
          >
            <i
              style={{ fontSize: "24px" }}
              class="pr-3 bi bi-music-note-list"
            ></i>{" "}
            Your library
          </p>
        </Link>

        <p
          style={{ fontSize: "14px", fontWeight: "bolder" }}
          className="text-light d-flex align-items-center home-search-library py-1 mt-4  mb-0"
        >
          <i
            style={{ fontSize: "24px" }}
            class="pr-3 bi bi-plus-square-fill"
          ></i>
          Create playlist
        </p>
        <Link to="/liked-songs" style={{ textDecoration: "none" }}>
          <p
            style={{ fontSize: "14px", fontWeight: "bolder" }}
            className="text-light d-flex align-items-center home-search-library py-1 mb-0"
          >
            <i
              style={{
                fontSize: "24px",
              }}
              class="bi bi-heart-fill"
            ></i>
            <span className="pl-3">Liked songs</span>
          </p>
        </Link>

        <div
          className="d-flex flex-column pr-4"
          style={{ position: "absolute", bottom: "120px" }}
        >
          <Link to="/sign-up" style={{ textDecoration: "none" }}>
            {username ? (
              <div></div>
            ) : (
              <Button
                className="nav-btn shadow-none px-5 border-0 mb-2 text-dark"
                variant="light"
              >
                SIGN UP
              </Button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MySidebar;
