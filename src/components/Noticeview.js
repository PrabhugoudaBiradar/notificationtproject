import { Card, CardBody, CardHeader } from "phoenix-component-2.0/card";
import React from "react";
import { Table, TableBody, TableHeader } from "phoenix-component-2.0/table";
import {
  headerlist,
  headerNoticeDetails,
  headerNoticeView,
  tablelist,
  tableNoticeDetails,
  tableNoticeView,
} from "./Constant";
import {
  IconButton,
  AddIconButton,
  Button,
} from "phoenix-component-2.0/button";
import { Input, SelectField, TextArea } from "phoenix-component-2.0/input";
import DatePicker from "react-datepicker2";
import { Link } from "react-router-dom";

import { ReactComponent as Home } from "phoenix-component-2.0/Icons/Basic/home.svg";
const Noticeview = () => {
  return (
    <Card>
      <CardHeader title={`Notice List - u/s 143(1)- 434236865`}></CardHeader>
      {/* <Link
        to="/"
        style={{
          textDecoration: "none",
          alignItems: "baseline",
          display: "flex",
          // border: "1px solid black",
          justifyContent: "left",
        }}
      >
        {" "}
        <div
          style={{
            display: "flex",
            // border: "1px solid black",
            backgroundColor: "#fff",
            boxShadow: "3px 2px 3px 2px #403c3c",
            marginTop: "2vh",
            marginLeft: "2.5vh",
            gap: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          <div style={{ position: "relative", top: "2px" }}>
            <h4>Home</h4>
          </div>
          <Home fill="#5dbea9" />
        </div>
      </Link> */}
      <div
        style={{ marginTop: "2vh", paddingLeft: "20px", marginRight: "20px" }}
      >
        <span style={{ color: "#44599c" }}>Notice Details</span>
        <div>
          <TextArea
            size="sm"
            rows={3}
            className="noResize"
            autoComplete="new-password"
            // name="address"
            //   label="Notice details"
            maxlength={200}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10vh",
          marginBottom: "20px",
          paddingLeft: "20px",
        }}
      >
        {/* <DatePickerField size="sm" label="Issued Date" /> */}
        <div style={{ display: "grid", color: "#1e357d" }}>
          <span>Issued Date</span>
          <DatePicker
            timePicker={false}
            placeholder={"dd-mm-yyyy"}
            inputFormat={"DD-MM-YYYY"}
            noCurrentDate={true}
            showTodayDateBtn={true}
          ></DatePicker>
        </div>
        <div style={{ display: "grid", color: "#1e357d" }}>
          <span>Due Date</span>
          <DatePicker
            timePicker={false}
            placeholder={"dd-mm-yyyy"}
            inputFormat={"DD-MM-YYYY"}
            noCurrentDate={true}
            showTodayDateBtn={true}
          ></DatePicker>
        </div>
      </div>

      <CardBody style={{ width: "195vh" }}>
        <Table>
          <TableHeader>
            <tr>
              {headerNoticeDetails.map((item, index) => {
                return <th style={{ textAlign: "center" }}>{item.title}</th>;
              })}
            </tr>
          </TableHeader>
          <TableBody>
            {tableNoticeDetails.map((item, index) => {
              return (
                <tr style={{ textAlign: "center" }}>
                  <td>{item.processdate}</td>
                  <td>{item.actionTaken}</td>
                  <td>
                    <span>
                      <a href="">view</a>
                    </span>
                  </td>
                  <td>{item.Doneby}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </CardBody>
      <CardBody style={{ width: "50vh", margin: "auto" }}>
        <Table>
          <TableHeader>
            <tr>
              {headerNoticeView.map((item, index) => {
                return <th style={{ textAlign: "center" }}>{item.title}</th>;
              })}
            </tr>
          </TableHeader>
          <TableBody>
            {tableNoticeView.map((item, index) => {
              return (
                <tr style={{ textAlign: "center" }}>
                  <td>{item.filename}</td>

                  <td>
                    <span>
                      <a href="">view</a>
                    </span>
                  </td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </CardBody>
      <div style={{ display: "flex", gap: "84%", marginLeft: "20px" }}>
        <div>
          <Button>Save</Button>
        </div>

        <div>
          <Button>Close</Button>
        </div>
      </div>
    </Card>
  );
};

export default Noticeview;
