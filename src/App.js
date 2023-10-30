// import "./App.css";
import { Card, CardBody } from "phoenix-component-2.0/card";
import Menubar from "./components/Menubar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Noticedetails from "./components/Noticedetails";
import Noticeview from "./components/Noticeview";
import NoticeList from "./components/NoticeList";
import { ReactComponent as MenuBar } from "phoenix-component-2.0/Icons/Basic/bars.svg";
// import Style from "./components/style.module.css";
import React from "react";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ display: "flex", gap: "1vh", height: "55vh" }}>
        <Menubar />
        {/* <Dashboard /> */}
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/NoticeDetails" element={<Noticedetails />} />
            <Route path="/NoticeView" element={<Noticeview />} />
            <Route path="/NoticeList" element={<NoticeList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
