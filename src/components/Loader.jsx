import React from "react";
// import "../style/Loader.css";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loader d-flex justify-content-center align-items-center">
      <Spinner animation="border" className="mx-auto d-block " />
    </div>
  );
};

export default Loader;
