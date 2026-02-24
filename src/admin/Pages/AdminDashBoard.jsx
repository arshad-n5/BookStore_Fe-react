import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/AdminHeader";
import AdminSideBar from "../Components/AdminSideBar";
import { getAllBooks, getAllUsers } from "../../Services/AllApi";
import { toast } from "react-toastify";

const AdminDashBoard = () => {
  useEffect(() => {
    getBooks();
    getAllUserData();
  }, []);
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

      <div className="grid grid-cols-[1fr_3fr]">
        <AdminSideBar />
        <div className="p-3 ">
          <div className="pt-10 flex justify-evenly text-center">
            <div className="adminHomeCard">
              <h1 className="text-2xl">Total User Count</h1>
              <h1 className="text-2xl">{allUsers?.length}</h1>
            </div>
            <div className="adminHomeCard">
              <h1 className="text-2xl">Total Book Count</h1>
              <h1 className="text-bold text-2xl">{allBooks.length}</h1>
            </div>
            <div className="adminHomeCard text-2xl">
              <h1>Total Job Listed</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
