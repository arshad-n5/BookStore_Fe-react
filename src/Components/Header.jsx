import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between align-middle p-2 text-center">
        <img
          className="w-25"
          src="https://media.istockphoto.com/id/1153065544/vector/book-logo-delivery-concept-design.jpg?s=612x612&w=0&k=20&c=hR5_Skxc2OWNAT6sYUMLStTEk5VhqcrLd-Zk8dyoj8M="
          alt="logo"
        />
        <div className="text-center flex justify-center align-middle items-center"><h1 className="text-4xl  text-center ms-18">Book Store</h1></div>
        <div className="me-3 flex justify-end gap-1 items-center ">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <button className="border ms-3 p-2 rounded-full hover:bg-black hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
            Log in
          </button>
        </div>
      </div>
      <div className="bg-gray-900 p-3 text-white text-center">
        <ul className="flex justify-center gap-20">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/book"}>Book</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
