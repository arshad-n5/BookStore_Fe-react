import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/AdminHeader";
import AdminSideBar from "../Components/AdminSideBar";
import { toast } from "react-toastify";
import { getAllBooks, getAllUsers } from "../../Services/AllApi";
import { Link } from "react-router-dom";

const AdminBooks = () => {
  useEffect(() => {
    getBooks();
    getAllUserData();
  }, []);
  const [showBooks, setShowBooks] = useState(true);
  const [showUsers, setShowUsers] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const getBooks = async () => {
    try {
      let apiResponse = await getAllBooks("");
      if (apiResponse.status == 200) {
        setAllBooks(apiResponse.data);
      } else {
        toast.error("error occured while loading books");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const getAllUserData = async () => {
    try {
      let apiResponse = await getAllUsers();
      if (apiResponse.status == 200) {
        setAllUsers(apiResponse.data);
      } else {
        toast.error("error occured while fetching users");
      }
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };
  return (
    <>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_3fr] ">
        <AdminSideBar />
        <div className="h-[90vh] overflow-y-scroll ">
          <div className="flex justify-center p-3 gap-2">
            <button
              onClick={() => {
                setShowBooks(true);
                setShowUsers(false);
              }}
              className="bg-gray-900 text-white p-3 rounded-2xl active:bg-gray-600 cursor-pointer"
            >
              Books
            </button>
            <button
              onClick={() => {
                setShowBooks(false);
                setShowUsers(true);
              }}
              className="bg-gray-900 text-white p-3 rounded-2xl active:bg-gray-600 cursor-pointer"
            >
              Users
            </button>
          </div>
          {showBooks && (
            <div>
              <div className="p-2">
                {allBooks?.length > 0 && (
                  <div className="cardholder p-5 grid grid-cols-3 gap-y-10">
                    {allBooks.map((eachBook, index) => (
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
                          <Link
                            className="text-blue-500 underline"
                            to={`${eachBook._id}/veiwBook`}
                          >
                            Veiw book
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {showUsers && (
            <div className="p-5">
              {allUsers?.length > 0 && (
                <div className="grid grid-cols-3 row-gap-2 space-y-10">
                  {allUsers?.map((eachData, i) => (
                    // <CardComp eachData={eachData} index={i} />
                    <div className="card" key={i}>
                      <div className="card-top">
                        <img
                          className="w-100 rounded-full"
                          src={eachData?.proPic}
                          alt="Card Image"
                        />
                      </div>
                      <div className="text-center">
                        <h2>{eachData?.userName}</h2>
                        <h3>{eachData?.email}</h3>
                        <p>{eachData?.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminBooks;
