import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Book = () => {
  return (
    <>
      <Header />
      <div className="text-center p-5 ">
        <h1 className="text-3xl">Collections</h1>
        <div className="p-2 flex gap-0 justify-center">
          <input
            className="p-2  border w-80 rounded-s-2xl"
            type="text"
            placeholder="search"
          />
          <button className="bg-blue-900  text-white rounded-e-2xl  hover:bg-blue-700  hover:text-white cursor-pointer  p-2.5">
            Search
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="grid md:grid-cols-[1fr_4fr] p-5">
          <div className="p-2 ">
            <div>
              <h1 className="text-2xl p-1">Filters</h1>
            </div>
            <div>
              <div>
                <input id="literary" type="radio" />{" "}
                <label className="text-1xl" htmlFor="literary">
                  Literary Fiction
                </label>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="cardholder p-5">
              <div className="card p-3">
                <div className="imgContainer">
                  <img
                    className="cardImage rounded-xl"
                    src="https://m.media-amazon.com/images/I/61UZCADNCwL._SL500_.jpg"
                    alt="bookImg"
                  />
                </div>

                <div className="text-center">
                  <h1>Book Name</h1>
                  <h1>Description</h1>
                  <h1>Price</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Book;
