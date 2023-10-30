import React from "react";
import { Link, useLocation } from "react-router-dom";
import Style from "./style.module.css";
// import Menubar from "./Menubar";
import { ReactComponent as MenuBar } from "phoenix-component-2.0/Icons/Basic/bars.svg";
const Navbar = () => {
  const location = useLocation();
  const breadcrumb =
    location.pathname === "/" ? "/Dashboard" : location.pathname;
  console.log("location", location);
  return (
    <nav className={Style.nav}>
      <div style={{ flexBasis: "20%" }}>
        <div style={{ display: "flex" }}>
          <Link to="/Dashboard">
            <img
              src="https://play-lh.googleusercontent.com/9oG7W_-zF7OSJ9pcmxR-jtW4m06fC-lwfhMnj-uO9C6Uu9AVH9UfBfSsG9OZTYf2QPMm"
              style={{
                height: "30px",
                width: "30px",
                marginTop: "2vh",
                marginBottom: "2vh",
                marginLeft: "2vh",
              }}
              alt="no"
            ></img>
          </Link>

          <div style={{ display: "flex" }}>
            <MenuBar
              fill="#1e90ff"
              style={{
                width: "27px",
                height: "27px",
                marginLeft: "3vh",
                marginTop: "1.5vh",
                // transform: isSubSideBarOpen && "rotate(180deg)",
                // transition: ".3s linear",
              }}
            />
            <div style={{ display: "grid" }}>
              <div
                style={{
                  marginTop: "1.5vh",
                  marginLeft: "2vh",
                  // marginBottom: "3vh",
                  // transform: isSubSideBarOpen && "rotate(180deg)",
                  // transition: ".3s linear",
                }}
              >
                ITR-7
              </div>
              <div>
                <span style={{ fontSize: "13px" }}>
                  {breadcrumb.substring(1)}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img
          src="https://cdn-icons-png.flaticon.com/512/660/660611.png"
          style={{
            height: "62px",
            width: "70px",
          
          }}
          alt="no"
        ></img> */}

      <div
        style={{
          flexBasis: "10%",
          border: "2px solid #e7e9eb",
          width: "20vh",
          marginRight: "3vh",
          height: "5vh",
          marginTop: "1vh",
          borderRadius: "5vh",
          // display: "flex",
          textAlign: "baseline",

          display: "flex",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/660/660611.png"
          style={{
            height: "30px",
            width: "30px",
            marginTop: "0.5vh",
            marginLeft: "0.5vh",
          }}
          alt="no"
        ></img>
        <span
          style={{
            // position: "relative",
            // marginBottom: "1vh",
            fontSize: "14px",
            color: "#475F94",
            marginLeft: "1vh",
            marginTop: "1vh",
          }}
        >
          Prabhugouda
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
