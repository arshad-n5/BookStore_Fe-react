import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { getAllBooks } from "../Services/AllApi";
import { all } from "axios";

const Book = () => {
  const [token, setToken] = useState(null);
  const [searchKey, setSearchKey] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  useEffect(() => {
    let tkn = localStorage.getItem("token");
    if (tkn) {
      setToken(tkn);
      getBooks();
    }
  }, [searchKey]);
  const [data, setData] = useState([]);

  const getBooks = async () => {
    try {
      let apiResponse = await getAllBooks(searchKey);
      if (apiResponse.status == 200) {
        setData(apiResponse.data);
        let categoryArray = apiResponse.data.map(
          (eachBook) => eachBook.category,
        );
        let dummyCat = [];
        categoryArray.forEach((eachCategory) => {
          if (!dummyCat.includes(eachCategory)) {
            dummyCat.push(eachCategory);
          }
        });
        setAllCategory(dummyCat);
      } else {
        alert(apiResponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("error occured while loading books");
    }
  };
  console.log(allCategory);

  return (
    <>
      <Header />

      {token ? (
        <>
          <div className="text-center p-5 ">
            <h1 className="text-3xl">Collections</h1>
            <div className="p-2 flex gap-0 justify-center">
              <input
                className="p-2  border w-80 rounded-s-2xl"
                type="text"
                placeholder="search"
                onChange={(e) => {
                  setSearchKey(e.target.value);
                }}
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
                    <input id="literary" type="radio" />
                    <label className="text-1xl" htmlFor="literary">
                      Literary Fiction
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-2">
                {data?.length > 0 && (
                  <div className="cardholder p-5 grid grid-cols-3 gap-y-10">
                    {data.map((eachBook, index) => (
                      <div key={index} className="card p-3">
                        <div className="imgContainer">
                          <img
                            className="cardImage rounded-xl"
                            src={eachBook?.imgURl}
                            alt="bookImg"
                          />
                        </div>

                        <div className="text-center">
                          <h1 className="font-bold p-2">{eachBook?.title}</h1>
                          <div className="cardTextConatiner max-h-20 w-70 text-center p-2">
                            <h1 className="">{eachBook?.abstract}</h1>
                          </div>
                          <h1 className="p-2">
                            <span className="font-bold ">&#8377; </span>
                            {eachBook?.price}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center p-2">
          <h1 className="text-center p-2 text-red-600 text-3xl">
            All Books Can only Be Accesses By logged in Users
          </h1>
          <Link className="text-blue-600 p-2 underline" to={"/login"}>
            Click here to Log In
          </Link>
          <div className="flex justify-center">
            <img
              className="h-100"
              src="https://cdn-icons-gif.flaticon.com/17905/17905775.gif"
              alt=""
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Book;
