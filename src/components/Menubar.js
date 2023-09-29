import React from "react";
// icons
// import { ReactComponent as MenuBar } from "phoenix-component-2.0/Icons/Basic/bars.svg";
// import {
//   Input,
//   NumberPattern,
//   SelectField,
//   PANField,
// } from "phoenix-component-2.0/input";
//style
import Style from "./style.module.css";
// import { Card, CardBody, CardHeader } from "phoenix-component-2.0/card";
import { Link } from "react-router-dom";
import { ReactComponent as Books } from "phoenix-component-2.0/Icons/Basic/books.svg";
import { ReactComponent as FileImg } from "phoenix-component-2.0/Icons/Basic/file-alt.svg";
import { ReactComponent as Assessee } from "phoenix-component-2.0/Icons/Basic/chat-bubble-user.svg";
import { ReactComponent as User } from "phoenix-component-2.0/Icons/Basic/user-circle.svg";
const Menubar = () => {
  return (
    <div
      style={{
        minWidth: "4vw",
        boxShadow: " 0px 0px 0px 3px #e7e9eb",
        backgroundColor: "#fff",
        height: "90vh",
        // paddingLeft: "0px",
      }}
    >
      {/* <CardBody style={{ width: "25vh", height: "90vh", paddingLeft: "2px" }}>
        <div
          style={{
            display: "grid",
            gap: "10px",
            textAlign: "left",
            marginTop: "5vh",
          }}
          // className={Style.container}
        >
          <Link to="/" className={Style.prabhu}>
           
            <li className={Style.prabhu}>Notice u/s 143(1)</li>
          </Link>
          <Link to="/noticelist" className={Style.prabhu}>
            <li className={Style.prabhu}>Notice u/s 143(1)(a)</li>
          </Link>
          <Link to="/noticedetails" className={Style.prabhu}>
            <li className={Style.prabhu}>Notice u/s 133</li>
          </Link>
          <Link to="/noticeview" className={Style.prabhu}>
            <li className={Style.prabhu}>Notice u/s 139(9)</li>
          </Link>
        </div>
      </CardBody> */}

      <Link to="/Dashboard" className={Style.prabhu}>
        <div
          style={{
            marginTop: "2vh",
          }}
        >
          <div
            className={Style.icon}
            style={{
              display: "grid",
              textAlign: "center",
            }}
          >
            <div>
              <Books fill="#707686" />
            </div>

            <span className={Style.defaultText}>143(1)(a) </span>
            {Style.icon && (
              <span className={Style.text}>
                Notice u/s <br /> 143(a)
              </span>
            )}
          </div>
        </div>
      </Link>
      <Link to="/NoticeList" className={Style.prabhu}>
        <div
          style={{
            marginTop: "2vh",
          }}
        >
          <div
            className={Style.icon}
            style={{
              display: "grid",
              textAlign: "center",
            }}
          >
            <div>
              <FileImg fill="#707686" />
            </div>

            <span className={Style.defaultText}>133 </span>
            {Style.icon && <span className={Style.text}>Notice u/s 133</span>}
          </div>
        </div>
      </Link>
      <Link to="/NoticeDetails" className={Style.prabhu}>
        <div
          style={{
            marginTop: "2vh",
          }}
        >
          <div
            className={Style.icon}
            style={{
              display: "grid",
              textAlign: "center",
            }}
          >
            <div>
              <Assessee fill="#707686" />
            </div>

            <span className={Style.defaultText}>143(1)</span>
            {Style.icon && (
              <span className={Style.text}>Notice u/s 143(1)</span>
            )}
          </div>
        </div>
      </Link>
      <Link to="/NoticeView" className={Style.prabhu}>
        <div
          style={{
            marginTop: "2vh",
          }}
        >
          <div
            className={Style.icon}
            style={{
              display: "grid",
              textAlign: "center",

              borderRadius: "20px",
            }}
          >
            <div>
              <User fill="#707686" />
            </div>

            <span className={Style.defaultText}>139(9)</span>
            {Style.icon && (
              <span className={Style.text}>Notice u/s 139(9)</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Menubar;
