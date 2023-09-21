// import "./App.css";
import { Card, CardBody } from "phoenix-component-2.0/card";
import Menubar from "./components/Menubar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Noticedetails from "./components/Noticedetails";
import Noticeview from "./components/Noticeview";
import NoticeList from "./components/NoticeList";
import { ReactComponent as MenuBar } from "phoenix-component-2.0/Icons/Basic/bars.svg";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          marginBottom: "0.5%",
          width: "100%",
          justifyContent: "space-between",
          boxShadow: " 0 2px 3px 0 #e7e9eb",
          backgroundColor: "#fff",
          display: "flex",
          marginTop: "0px",
        }}
      >
        <div style={{ flexBasis: "20%" }}>
          <div style={{ display: "flex" }}>
            <Link to="/">
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
              position: "relative",
              bottom: "1vh",
              fontSize: "14px",
              color: "#475F94",
              left: "8px",
            }}
          >
            Prabhugouda
          </span>
        </div>
      </nav>

      <div style={{ display: "flex", gap: "1vh" }}>
        <Menubar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/noticedetails" element={<Noticedetails />} />
          <Route path="/noticeview" element={<Noticeview />} />
          <Route path="/noticelist" element={<NoticeList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
