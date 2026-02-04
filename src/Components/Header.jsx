import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";
const Header = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <div>
      <div className="flex justify-between align-middle p-2 text-center">
        <img
          className="w-25"
          src="https://media.istockphoto.com/id/1153065544/vector/book-logo-delivery-concept-design.jpg?s=612x612&w=0&k=20&c=hR5_Skxc2OWNAT6sYUMLStTEk5VhqcrLd-Zk8dyoj8M="
          alt="logo"
        />
        <div className="text-center flex justify-center align-middle items-center">
          <h1 className="text-4xl  text-center ms-18">Book Store</h1>
        </div>
        <div className="me-3 flex justify-end gap-1 items-center ">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          {token ? (
            <Dropdown
              className=" p-2 text-black rounded-2xl"
              label={
                <>
                  <img className="w-10 h-10 rounded-2xl"
                    src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                    alt="pro pic"
                  />
                </>
              }
              dismissOnClick={false}
            >
              <DropdownItem><Link to={'/profile'}>Profile</Link></DropdownItem>
              <DropdownItem>Logout</DropdownItem>
             
            </Dropdown>
          ) : (
            <Link
              to={"/login"}
              className="border ms-3 p-2 rounded-full hover:bg-black hover:text-white cursor-pointer"
            >
              <FontAwesomeIcon icon={faUser} />
              Log in
            </Link>
          )}
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
