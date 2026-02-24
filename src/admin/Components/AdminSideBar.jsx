import {
  faBook,
  faBriefcase,
  faGauge,
  faGear,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <>
      <div className="bg-gray-900 text-white text-center h-[90vh]   flex flex-col   ">
        <h1 className="text-2xl text-center p-5">
          <FontAwesomeIcon icon={faGauge} /> Admin DashBoard
        </h1>
        <hr />
        <ul className="space-y-20 pt-20">
          <li>
            <Link to={"/admin"}>
              <FontAwesomeIcon icon={faHouse} /> Admin Home{" "}
            </Link>
          </li>
          <li>
            <Link to={"/admin-books"}>
              <FontAwesomeIcon icon={faBook} /> Admin Book / Users
            </Link>
          </li>
          <li>
            <Link to={"/admin"}>
              <FontAwesomeIcon icon={faBriefcase} /> Admin Carrers
            </Link>
          </li>
          <li>
            <Link to={"/admin-settings"}>
              <FontAwesomeIcon icon={faGear} /> Admin Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSideBar;
