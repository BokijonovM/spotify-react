import React from "react";
import "./style.css";
import logo from "./logo.svg";

function MySidebar() {
  return (
    <div className=" sidebar-div pl-4">
      <img className="logo-sidebar" src={logo} alt="logo" />
      <div>
        <p
          style={{ fontSize: "14px", fontWeight: "bolder" }}
          className="text-light d-flex align-items-center home-search-library py-1 mb-0 pt-4"
        >
          <i style={{ fontSize: "24px" }} class=" pr-3 bi bi-house-fill"></i>{" "}
          <a className="text-light" style={{ cursor: "pointer" }} href="/">
            Home
          </a>
        </p>
        <p
          style={{ fontSize: "14px", fontWeight: "bolder" }}
          className="text-light d-flex align-items-center home-search-library py-1 mb-0"
        >
          <i style={{ fontSize: "24px" }} class="pr-3 bi bi-search"></i> Search
        </p>
        <p
          style={{ fontSize: "14px", fontWeight: "bolder" }}
          className="text-light d-flex align-items-center home-search-library py-2 mb-0"
        >
          <i
            style={{ fontSize: "24px" }}
            class="pr-3 bi bi-music-note-list"
          ></i>{" "}
          Your library
        </p>

        <p
          style={{ fontSize: "14px", fontWeight: "bolder" }}
          className="text-light d-flex align-items-center home-search-library py-1 pt-4  mb-0"
        >
          <i style={{ fontSize: "24px" }} class="pr-3 bi bi-plus-square"></i>
          Create playlist
        </p>
        <p
          style={{ fontSize: "14px", fontWeight: "bolder" }}
          className="text-light d-flex align-items-center home-search-library py-1 mb-0"
        >
          <i style={{ fontSize: "24px" }} class="pr-3 bi bi-heart"></i>Liked
          songs
        </p>
      </div>
    </div>
  );
}

export default MySidebar;
