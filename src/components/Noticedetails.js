import { Card, CardBody, CardHeader } from "phoenix-component-2.0/card";
import React from "react";
import { Table, TableBody, TableHeader } from "phoenix-component-2.0/table";
import { headerNoticeDetails, tableNoticeDetails } from "./Constant";
import { Input, SelectField, TextArea } from "phoenix-component-2.0/input";
import DatePicker from "react-datepicker2";
import Style from "./style.module.css";
import { ReactComponent as Home } from "phoenix-component-2.0/Icons/Basic/home.svg";

import {
  AddIconButton,
  TableDeleteButton,
  Button,
} from "phoenix-component-2.0/button";
// import { Link } from "react-router-dom";

const Noticedetails = () => {
  return (
    <Card>
      <CardHeader title={`Notice List - u/s 143(1) - 434236865`}></CardHeader>
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
        style={{ marginTop: "20px", paddingLeft: "20px", marginRight: "20px" }}
      >
        <span style={{ color: "#44599c" }}>Notice Details</span>

        <TextArea
          //   size="sm"
          rows={2}
          className="noResize"
          autoComplete="new-password"
          // name="address"
          //   label="Notice details"
          maxlength={200}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10vh",
          marginBottom: "20px",
          paddingLeft: "20px",
        }}
      >
        {/* <DatePicker size="sm" label="Issued Date" /> */}
        <div style={{ display: "grid", color: "#44599c" }}>
          <span>Issued Date</span>
          <DatePicker
            timePicker={false}
            placeholder={"dd-mm-yyyy"}
            inputFormat={"DD-MM-YYYY"}
            noCurrentDate={true}
            showTodayDateBtn={true}
          ></DatePicker>
        </div>
        <div style={{ display: "grid", color: "#44599c" }}>
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

      <Card style={{ marginLeft: "20px" }}>
        <CardBody style={{ width: "190vh" }}>
          <div style={{ marginTop: "2vh" }}>
            <span>Action Taken</span>
            <TextArea
              //   size="sm"
              rows={2}
              // className="noResize"
              autoComplete="new-password"
              // name="address"
              //   label="Notice details"
              maxlength={200}
              placeHolder="Details gathered from branch.  Called to confirm the demand by verifying filed returns.  Correction return filed to clear the demand."
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              gap: "10px",
              alignItems: "baseline",
            }}
          >
            <span style={{ flexBasis: "15%" }}>Reference Documents</span>

            <span style={{ flexBasis: "30%" }}>
              {" "}
              <Input placeHolder={"Correction-Return-26Q-Q1.pdf"} size="sm" />
            </span>

            <span style={{ flexBasis: "5%" }}>
              <AddIconButton />
            </span>

            <span style={{ flexBasis: "10%" }}>View Document</span>
          </div>
          <div>
            <a href="https://www.incometax.gov.in/iec/foportal/">
              Click to open ITD website
            </a>
          </div>
        </CardBody>
      </Card>

      <div
        style={{
          display: "flex",
          gap: "84%",
          marginTop: "2vh",
          marginLeft: "20px",
        }}
      >
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

export default Noticedetails;
