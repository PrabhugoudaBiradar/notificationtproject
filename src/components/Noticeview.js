import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "phoenix-component-2.0/card";
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
import Style from "./style.module.css";

import { ReactComponent as Home } from "phoenix-component-2.0/Icons/Basic/home.svg";
const Noticeview = () => {
  return (
    <Card style={{ height: "55vh" }}>
      <CardHeader title={`Notice List - u/s 143(1)- 434236865`}></CardHeader>

      <CardBody style={{ width: "93vw", height: "85vh" }}>
        <div>
          <span style={{ color: "#44599c" }}>Notice Details</span>
          {/* <div> */}

          <TextArea
            size="sm"
            rows={4.5}
            autoComplete="new-password"
            // placeholder="Address"

            name="address"
            className={Style.noResize}
            maxlength={200}
          />
          {/* <textArea
          size="sm"
          rows={4}
          cols={15}
          Resize="none"
          className="noResize"
          autoComplete="new-password"
          // name="address"
          //   label="Notice details"
          style={{ resize: "none" }}
          maxlength={200}
        /> */}
          {/* </div> */}
        </div>
        <div
          style={{
            display: "flex",
            gap: "10vh",
            marginBottom: "20px",
          }}
        >
          {/* <DatePickerField size="sm" label="Issued Date" /> */}
          <div style={{ display: "grid", color: "#1e357d" }}>
            <span>Issued Date</span>
            <div style={{ display: "flex" }}>
              <DatePicker
                timePicker={false}
                placeholder={"dd-mm-yyyy"}
                inputFormat={"DD-MM-YYYY"}
                noCurrentDate={true}
                showTodayDateBtn={true}
              ></DatePicker>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="15"
                fill="#44599c"
                viewBox="0 0 16 18"
                style={{
                  marginLeft: "-19px",
                  marginTop: "3px",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 14.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm0-3.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm-4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm5.6-9.6h-.8V.8a.8.8 0 1 0-1.6 0v.8H4.8V.8a.8.8 0 1 0-1.6 0v.8h-.8A2.4 2.4 0 0 0 0 4v11.2a2.4 2.4 0 0 0 2.4 2.4h11.2a2.4 2.4 0 0 0 2.4-2.4V4a2.4 2.4 0 0 0-2.4-2.4zm.8 13.6a.8.8 0 0 1-.8.8H2.4a.8.8 0 0 1-.8-.8V8h12.8v7.2zm0-8.8H1.6V4a.8.8 0 0 1 .8-.8h.8V4a.8.8 0 1 0 1.6 0v-.8h6.4V4a.8.8 0 1 0 1.6 0v-.8h.8a.8.8 0 0 1 .8.8v2.4zM4 11.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm0 3.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6z"
                />
              </svg>
            </div>
          </div>
          <div style={{ display: "grid", color: "#1e357d" }}>
            <span>Due Date</span>
            <div style={{ display: "flex" }}>
              <DatePicker
                timePicker={false}
                placeholder={"dd-mm-yyyy"}
                inputFormat={"DD-MM-YYYY"}
                noCurrentDate={true}
                showTodayDateBtn={true}
                // style={{border}}
              ></DatePicker>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="15"
                fill="#44599c"
                viewBox="0 0 16 18"
                style={{
                  marginLeft: "-19px",
                  marginTop: "3px",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 14.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm0-3.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm-4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm5.6-9.6h-.8V.8a.8.8 0 1 0-1.6 0v.8H4.8V.8a.8.8 0 1 0-1.6 0v.8h-.8A2.4 2.4 0 0 0 0 4v11.2a2.4 2.4 0 0 0 2.4 2.4h11.2a2.4 2.4 0 0 0 2.4-2.4V4a2.4 2.4 0 0 0-2.4-2.4zm.8 13.6a.8.8 0 0 1-.8.8H2.4a.8.8 0 0 1-.8-.8V8h12.8v7.2zm0-8.8H1.6V4a.8.8 0 0 1 .8-.8h.8V4a.8.8 0 1 0 1.6 0v-.8h6.4V4a.8.8 0 1 0 1.6 0v-.8h.8a.8.8 0 0 1 .8.8v2.4zM4 11.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm0 3.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6z"
                />
              </svg>
            </div>
          </div>
        </div>
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
        <Table style={{ width: "50vh", margin: "auto", marginTop: "3vh" }}>
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

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Button>Save</Button>
          </div>

          <div>
            <Button>Close</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Noticeview;
