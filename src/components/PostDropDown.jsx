import React from "react";
import { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { showAddPost } from "./SingleNews";

function PostDropDown({ userOnNav, userPic }) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      style={{ color: "black" }}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      {/* &#x25bc; */}
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <div className="mx-3 d-flex justify-content-center"></div>
          <hr />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Dropdown alignRight>
      <Dropdown.Toggle
        alignRight
        as={CustomToggle}
        id="dropdown-custom-components"
        style={{ color: "black !important" }}
      >
        <i className="bi bi-three-dots"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: "240px" }} as={CustomMenu} alignRight>
        <div className="post-dropdown">
          <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
            <i class="bi bi-pencil-square"></i>
            <div>
              <p
                className="mb-0"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                Edit
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
            <i class="bi bi-download"></i>
            <div>
              <p
                className="mb-n1"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                Save
              </p>
              <p className="mb-0" style={{ fontSize: "10px" }}>
                Save for later
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
            <i class="bi bi-link"></i>
            <div>
              <p
                className="mb-0"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                Copy link to post
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
            <i class="bi bi-code-slash"></i>
            <div>
              <p
                className="mb-n1"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                Embed this post
              </p>
              <p className="mb-0" style={{ fontSize: "10px" }}>
                Copy and Paste embed to you site
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
            <i class="bi bi-flag-fill"></i>
            <div>
              <p
                className="mb-n1"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                Report this post
              </p>
              <p className="mb-0" style={{ fontSize: "10px" }}>
                I don't want to see this post
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
            <i class="bi bi-ui-radios"></i>
            <div>
              <p
                className="mb-n1"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                Improve my feed
              </p>
              <p className="mb-0" style={{ fontSize: "10px" }}>
                Get recommended source to follow
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between px-3 py-2 mx-2">
            <i class="bi bi-eye-fill"></i>
            <div>
              <p
                className="mb-n1"
                style={{ fontWeight: "600", fontSize: "12px" }}
              >
                Who can see that post?
              </p>
              <p className="mb-0" style={{ fontSize: "10px" }}>
                Visible to anyone on or off LinkedIn
              </p>
            </div>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
  //   return <div></div>;
}

export default PostDropDown;
