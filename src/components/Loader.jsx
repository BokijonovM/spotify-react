import React from "react";
// import "../style/Loader.css";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      className="loader d-flex justify-content-center align-items-center"
      style={{ marginTop: "200px" }}
    >
      <Spinner animation="border" className="mx-auto d-block " />
    </div>
  );
};

export default Loader;
