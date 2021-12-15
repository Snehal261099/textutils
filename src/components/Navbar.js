import React from "react";
import { Link } from "react-router-dom";
// import { a } from "react-router-dom";

export default function Navbar(props) {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-a active mx-1" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-a" to="/">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-a active mx-1" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.toggleMode("warning");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-light rounded mx-2"
              onClick={() => {
                props.toggleMode("light");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-dark rounded mx-2"
              onClick={() => {
                props.toggleMode("dark");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          {/* <div
            className={`form-check form-switch text-{props.mode==="dark" ? "light" : "dark"}`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => { props.toggleMode(null) }}            />
            <label
              className={`form-check-label`}
              style={{ color: props.mode === "dark" ? "white" : "black" }}
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
