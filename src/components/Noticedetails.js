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

const Noticedetails = () => {
  // const CustomDatePickerInput = ({ value, onClick }) => (
  //   <div>
  //     <input
  //       type="text"
  //       value={value}
  //       onClick={onClick}
  //       placeholder="Select a date"
  //       readOnly
  //     />
  //     <i className="fa fa-calendar" onClick={onClick} />
  //   </div>
  // );

  return (
    <Card>
      <CardHeader title={`Notice List - u/s 143(1) - 434236865`}></CardHeader>

      <CardBody
        style={{
          width: "93vw",
          height: "84vh",
          //overflow: "hidden"
        }}
      >
        <div>
          <span style={{ color: "#44599c" }}>Notice Details</span>

          <TextArea
            //   size="sm"
            rows={2}
            className={Style.noResize}
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
            paddingLeft: "5px",
          }}
        >
          {/* <DatePicker size="sm" label="Issued Date" /> */}
          <div style={{ display: "grid", color: "#44599c" }}>
            <span>Issued Date</span>
            <div style={{ display: "flex" }}>
              <DatePicker
                timePicker={false}
                placeholder={"dd-mm-yyyy"}
                inputFormat={"DD-MM-YYYY"}
                noCurrentDate={true}
                // showTodayDateBtn={false}
                // style={{  }}
                autocomplete="off"
                border="2px black solid"
              ></DatePicker>
              {/* <div> */}

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
              {/* </div> */}
            </div>
          </div>
          <div style={{ display: "grid", color: "#44599c" }}>
            <span>Due Date</span>
            <div style={{ display: "flex" }}>
              <DatePicker
                timePicker={false}
                placeholder={"dd-mm-yyyy"}
                inputFormat={"DD-MM-YYYY"}
                noCurrentDate={true}
                showTodayDateBtn={true}
              ></DatePicker>
              {/* <div> */}
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
              {/* </div> */}
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
        <div
          style={{
            boxShadow: " 0px 0px 0px 1px #e7e9eb",
            padding: "3px 8px 3px 8px",
            marginTop: "2vh",
          }}
        >
          <div style={{ marginTop: "2vh" }}>
            <span>Action Taken</span>
            <TextArea
              //   size="sm"
              rows={2}
              className={Style.noResize}
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
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // gap: "84%",
            marginTop: "1vh",
            marginLeft: "0px",
          }}
        >
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

export default Noticedetails;
