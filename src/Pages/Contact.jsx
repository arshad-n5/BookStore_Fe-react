import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <>
      <Header />

      <section>
        <div className="text-center p-3  ">
          <h1 className="text-4xl">Contacts</h1>
          <p className=" p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            inventore placeat nemo voluptatem iure, iste asperiores quia amet
            sint, similique corrupti praesentium delectus nesciunt odit
            laudantium. Beatae repudiandae amet odit! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Soluta, doloremque ullam itaque
            atque totam quasi molestias cumque ducimus fuga voluptate suscipit
            vel distinctio omnis voluptates obcaecati quidem quas iure? Facere?
          </p>
        </div>
        <div className="flex  justify-evenly p-10">
          <div className="flex text-justify">
            <div>
              <h1>
                <FontAwesomeIcon icon={faLocationDot} />
              </h1>
            </div>
            <div>
              <h1>123 Main Street, Apt 4B, Anytown, CA 91234</h1>
            </div>
          </div>
          <div className="flex text-justify">
            <div>
              <h1>
                <FontAwesomeIcon icon={faPhone} />
              </h1>
            </div>
            <div>
              <h1>+91 9874561230</h1>
            </div>
          </div>
          <div className="flex text-justify">
            <div>
              <h1>
                <FontAwesomeIcon icon={faEnvelope} />
              </h1>
            </div>
            <div>
              <h1>123 Main Street, Apt 4B, Anytown, CA 91234</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 items-center">
          <div className="p-5">
            <div className="flex flex-col text-center bg-gray-300 p-3 gap-5 rounded-2xl">
              <h1>Send me Message</h1>
              <input
                className="bg-white text-black p-1 rounded-2xl"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-white text-black p-1 rounded-2xl"
                type="text"
                placeholder="Email id"
              />
              <textarea
                className="w-100 h-50 bg-white   text-black p-1 rounded-2xl"
                placeholder="Message"
              ></textarea>
              <div>
                <button className="bg-gray-900 text-white p-3 w-100 cursor-pointer rounded-2xl">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div>
            <iframe
              className="rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126271.9118621596!2d76.84187902413046!3d8.499646838167815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1769443617600!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
