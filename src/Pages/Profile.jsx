import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const Profile = () => {
  return (
    <section>
      <Header />
      <div className="profilePicholder bg-gray-900 h-50"></div>
      <div className="profilePic">
        <img
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
      </div>
      <div className="">
        <div className="pt-30 flex justify-between ps-35 pe-15 pb-5">
          <h1 className="text-4xl">Name</h1>
          <button className="text-blue-600 p-3 border rounded-2xl cursor-pointer">
            <FontAwesomeIcon icon={faPenToSquare} /> Edit
          </button>
        </div>
        <div className="text-justify ps-31 pe-15 pb-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure
            harum mollitia rerum earum sunt tenetur dolorum sint cumque. Saepe
            recusandae impedit ipsum dignissimos optio doloremque aliquam non
            similique autem. Beatae molestias ipsa similique eum, quae in
            impedit? Aspernatur repellendus quisquam, ducimus eveniet facilis
            magni corporis dolorum animi consequuntur doloribus ut dignissimos,
            quibusdam earum iusto inventore perferendis neque obcaecati
            delectus.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center p-5 ">
          <buton className="p-3 ms-2 text-blue-600 border cursor-pointer">
            Sell Book
          </buton>
          <buton className="p-3 ms-2 text-blue-600 border cursor-pointer">
            Book Status
          </buton>
          <buton className="p-3 ms-2 text-blue-600 border cursor-pointer">
            Purchase history
          </buton>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Profile;
