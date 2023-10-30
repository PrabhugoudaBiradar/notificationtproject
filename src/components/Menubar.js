import React, { useState } from "react";
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
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Books } from "phoenix-component-2.0/Icons/Basic/books.svg";
import { ReactComponent as FileImg } from "phoenix-component-2.0/Icons/Basic/file-alt.svg";
import { ReactComponent as Assessee } from "phoenix-component-2.0/Icons/Basic/chat-bubble-user.svg";
import { ReactComponent as User } from "phoenix-component-2.0/Icons/Basic/user-circle.svg";
import { useEffect } from "react";
const Menubar = () => {
  const location = useLocation();

  console.log("location2", location);
  const [colorchange, setcolorchange] = useState({
    dashboard: false,
    noticelist: false,
    noticedetails: false,
    noticeview: false,
  });
  // const colorChange = () => {
  //   setcolorchange({...colorchange });
  // };
  useEffect(() => {
    location.pathname === "/"
      ? setcolorchange({ dashboard: true })
      : location.pathname === "/NoticeList"
      ? setcolorchange({ noticelist: true })
      : location.pathname === "/NoticeDetails"
      ? setcolorchange({ noticedetails: true })
      : location.pathname === "/NoticeView"
      ? setcolorchange({ noticeview: true })
      : setcolorchange({
          dashboard: false,
          noticelist: false,
          noticedetails: false,
          noticeview: false,
        });
  }, [location.pathname]);

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

      <Link
        to="/"
        className={Style.prabhu}
        onClick={() => setcolorchange({ dashboard: true })}
      >
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
            <div className={Style.book}>
              <Books
                fill={colorchange.dashboard === true ? "#53aff2" : "#707686"}
              />
            </div>

            <span
              className={Style.defaultText}
              style={{
                color: colorchange.dashboard === true ? "#53aff2" : "#707686",
              }}
            >
              143(1)(a){" "}
            </span>
            {Style.icon && (
              <span className={Style.text}>
                Notice u/s <br /> 143(a)
              </span>
            )}
          </div>
        </div>
      </Link>
      <Link
        to="/NoticeList"
        className={Style.prabhu}
        onClick={() => setcolorchange({ noticelist: true })}
      >
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
              <FileImg
                fill={colorchange.noticelist === true ? "#53aff2" : "#707686"}
              />
            </div>

            <span
              className={Style.defaultText}
              style={{
                color: colorchange.noticelist === true ? "#53aff2" : "#707686",
              }}
            >
              133{" "}
            </span>
            {Style.icon && <span className={Style.text}>Notice u/s 133</span>}
          </div>
        </div>
      </Link>
      <Link
        to="/NoticeDetails"
        className={Style.prabhu}
        onClick={() => setcolorchange({ noticedetails: true })}
      >
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
              <Assessee
                fill={
                  colorchange.noticedetails === true ? "#53aff2" : "#707686"
                }
              />
            </div>

            <span
              className={Style.defaultText}
              style={{
                color:
                  colorchange.noticedetails === true ? "#53aff2" : "#707686",
              }}
            >
              143(1)
            </span>
            {Style.icon && (
              <span className={Style.text}>Notice u/s 143(1)</span>
            )}
          </div>
        </div>
      </Link>
      <Link
        to="/NoticeView"
        className={Style.prabhu}
        onClick={() => setcolorchange({ noticeview: true })}
      >
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
              <User
                fill={colorchange.noticeview === true ? "#53aff2" : "#707686"}
              />
            </div>

            <span
              className={Style.defaultText}
              style={{
                color: colorchange.noticeview === true ? "#53aff2" : "#707686",
              }}
            >
              139(9)
            </span>
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
