import { Card, CardBody, CardHeader } from "phoenix-component-2.0/card";
import React from "react";
import { Table, TableBody, TableHeader } from "phoenix-component-2.0/table";
import { headerlist, tablelist } from "./Constant";
// import { ReactComponent as GoIcon1 } from "../Asset/image/GoIcon1";
import { ReactComponent as Edit } from "phoenix-component-2.0/Icons/Basic/edit.svg";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Card>
        <CardHeader title={`Dashboard`}></CardHeader>
        <div style={{ marginLeft: "28px", marginTop: "20px" }}>
          <span>
            <a href="">Sync notices</a>{" "}
          </span>
        </div>
        <CardBody style={{ height: "55vh", width: "93vw" }}>
          <Table>
            <TableHeader>
              <tr>
                {headerlist.map((item, index) => {
                  return <th style={{ textAlign: "center" }}>{item.title}</th>;
                })}
              </tr>
            </TableHeader>
            <TableBody>
              {tablelist.map((item, index) => {
                return (
                  <tr style={{ textAlign: "center" }}>
                    {/* <td>
                      <span>
                        <a href="">view</a>{" "}
                      </span>
                    </td> */}
                    <td>{item.title}</td>

                    <td>
                      <Link to="/NoticeList">{item.overDue}</Link>
                    </td>
                    <td>{item.duetoday}</td>
                    <td>{item.due7}</td>
                    <td>{item.due8}</td>
                    <td>{item.due15}</td>
                  </tr>
                );
              })}
            </TableBody>
          </Table>
          {/* <div
            style={{
              height: "35vh",
              width: "173vh",
              marginTop: "16vh",
              border: "2px solid black",
            }}
          >
            <span
              style={{
                position: "relative",
                top: "17vh",
                left: "50vh",
                fontSize: "30px",
                fontWeight: "40px",
              }}
            >
              Area for chart, graphics and more...
            </span>
          </div> */}
        </CardBody>
      </Card>
    </>
  );
};

export default Dashboard;
