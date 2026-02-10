import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { getLimitedBooks } from "../Services/AllApi";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let apiResponse = await getLimitedBooks();
    if (apiResponse.status == 200) {
      setData(apiResponse.data);
    } else {
      alert(apiResponse.response.data.message);
    }
  };
  return (
    <>
      <Header />
      <div className="backgroundImg">
        <div className="homeContainer">
          <div className="content ">
            <div className="text-white font-bold">
              <h1 className="text-center text-5xl">Wonderful Gifts</h1>
              <h1 className="text-center">
                Give your Family and Friends a book
              </h1>
            </div>
            <div>
              <input
                className="homeInp bg-white text-xl w-100 h-10 p-5 rounded-2xl border-0 "
                type="text"
                placeholder="Search Books"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="sec2 p-3">
        <div>
          <div className="text-center">
            <h1 className="text-2xl">New Arrivals</h1>
            <h1 className="text-3xl">Explore Our Latest Collection</h1>
          </div>
          {data?.length > 0 && (
            <div className="cardholder p-5 grid grid-cols-4">
              {data.map((eachBook) => (
                <div className="card p-3">
                  <div className="imgContainer">
                    <img
                      className="cardImage rounded-xl "
                      src={eachBook?.imgURl}
                      alt="bookImg"
                    />
                  </div>

                  <div className="text-center">
                    <h1 className="font-bold p-2">{eachBook?.title}</h1>
                    <div className="cardTextConatiner max-h-20 w-70 text-center p-2">
                      <h1 >{eachBook?.abstract}</h1>
                    </div>
                    <h1>
                      <span className="font-bold">&#8377; </span>
                      {eachBook?.price}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center p-3">
            <button className="bg-gray-900 text-white font-bold p-2 border rounded-2xl cursor-pointer hover:bg-white hover:text-gray-900 hover:border-gray-900">
              Explore More
            </button>
          </div>
        </div>
      </section>
      <section className="sec3 p-5">
        <div className="flex justify-evenly  items-center">
          <div className="flex flex-col gap-5 w-200">
            <div className="text-center">
              <h1 className="text-2l">FEATURED AUTHORS</h1>
              <h1 className="text-4xl">Captivates with every word</h1>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center ">
              <div className="w-170">
                <p className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt fuga nostrum illum distinctio eum quidem recusandae
                  soluta aliquam laboriosam odit quas, nam molestias fugiat
                  culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Sunt earum possimus
                  accusantium necessitatibus id neque soluta quibusdam explicabo
                  laborum? Deserunt vel quia voluptates dicta incidunt illo fuga
                  pariatur sequi error.
                </p>
              </div>
              <div className="w-170">
                <p className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt fuga nostrum illum distinctio eum quidem recusandae
                  soluta aliquam laboriosam odit quas, nam molestias fugiat
                  culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Sunt earum possimus
                  accusantium necessitatibus id neque soluta quibusdam explicabo
                  laborum? Deserunt vel quia voluptates dicta incidunt illo fuga
                  pariatur sequi error.
                </p>
              </div>
            </div>
          </div>
          <div className="w-150">
            <img
              src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg"
              alt="img"
            />
          </div>
        </div>
      </section>
      <section className="sec4 p-5">
        <div className="flex flex-col justify-evenly gap-5">
          <div className="text-center">
            <h1 className="">TESTIMONIALS</h1>
            <h1 className="text-3xl">See What Others Are Saying</h1>
          </div>
          <div className="flex flex-col justify-center items-center align-middle gap-4 ">
            <div className="w-50 h-50 rounded-full">
              <img
                className="w-full rounded-full"
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="img3"
              />
            </div>
            <h1 className="text-center">Treesa Joseph</h1>
          </div>
          <div>
            <p className="text-justify p-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              perspiciatis porro eveniet. Optio necessitatibus provident autem,
              quam qui, dicta molestiae quis quia deleniti aliquam magnam
              temporibus mollitia ex repellendus! Dicta. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Consequuntur, deserunt optio
              eum dolorum iure consectetur quia facilis porro modi placeat ea
              quis explicabo maxime voluptatum unde animi nemo aperiam quos!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
