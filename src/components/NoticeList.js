import React from "react";
import { Table, TableBody, TableHeader } from "phoenix-component-2.0/table";
import {
  headerlist,
  headerNoticelist,
  tablelist,
  tableNoticelist,
} from "./Constant";
import { Card, CardBody, CardHeader } from "phoenix-component-2.0/card";
import { ReactComponent as Edit } from "phoenix-component-2.0/Icons/Basic/edit.svg";
import { Link } from "react-router-dom";

import { ReactComponent as Home } from "phoenix-component-2.0/Icons/Basic/home.svg";
const NoticeList = () => {
  return (
    // <div style={{ display: "grid" }}>

    <Card>
      <CardHeader title={`Notice List - u/s 143(1)`}></CardHeader>
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
        style={{
          border: "1px solid #44599c",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          marginLeft: "20px",
          marginTop: "10px",
          marginRight: "20px",
          fontWeight: "60px",
          color: "#44599c",
        }}
      >
        <span>Filter panel</span>
      </div>

      <CardBody style={{ width: "93vw" }}>
        <Table>
          <TableHeader>
            <tr>
              {headerNoticelist.map((item, index) => {
                return <th style={{ textAlign: "center" }}>{item.title}</th>;
              })}
            </tr>
          </TableHeader>
          <TableBody>
            {tableNoticelist.map((item, index) => {
              return (
                <tr style={{ textAlign: "center" }}>
                  <td>{item.noticeno}</td>
                  <td>{item.issueddate}</td>
                  <td>{item.duedate}</td>
                  <td>{item.description}</td>
                  <td>{item.currentstatus}</td>
                  <td>
                    <Link to="/NoticeDetails">
                      <Edit fill="#5dbea9" />{" "}
                    </Link>{" "}
                  </td>
                  <td>
                    <Link to="/NoticeView">
                      <a>View</a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </CardBody>
      <div
        style={{
          border: "1px solid #44599c",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          marginLeft: "20px",
          marginBottom: "10px",
          marginRight: "20px",
          fontWeight: "60px",
          color: "#44599c",
        }}
      >
        <span>Navigation panel</span>
      </div>
    </Card>
    // </div>
  );
};

export default NoticeList;
