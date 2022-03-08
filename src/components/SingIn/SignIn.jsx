import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import SignUp from "./SingUp";

function SignIn() {
  return (
    <div className="signIn-main-div">
      <SignUp />
    </div>
  );
}

export default SignIn;
