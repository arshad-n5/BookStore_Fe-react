import React from "react";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="footer p-5 flex bg-gray-900 text-white justify-around">
        <div>
          <h1>ABOUT US</h1>
          <p className="w-150 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            dolorem veniam deserunt quisquam eius ad hic maxime dicta ipsum nemo
            itaque necessitatibus quas nobis, illum voluptate, pariatur
            recusandae alias harum!
          </p>
        </div>
        <div>
          <h1>NEWSLETTER</h1>
          <div className="pt-2">
            <h1>Stay updated with our latest trends</h1>
            <div className="pt-2"><input className="bg-white text-black p-2" type="text" placeholder="E-Mail ID" /></div>
          </div>
        </div>
        <div>
          <h1>Follow Us</h1>
          <h1 className="pt-2">Let us be social</h1>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center">
        <h1>Copyright © 2026 All rights reserved | This website is made with by 💛 Arshad N</h1>
      </div>
    </>
  );
};

export default Footer;
