import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import Auth from "./Pages/Auth";
import Profile from "./Pages/profile";
import VeiwSingleBook from "./Components/VeiwSingleBook";
import { ToastContainer, Zoom } from "react-toastify";
import AdminBooks from "./admin/Pages/AdminBooks";
import AdminDashBoard from "./admin/Pages/AdminDashBoard";
import AdminSettings from "./admin/Components/AdminSettings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth isFromRegister={true} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book/:id/veiwbook" element={<VeiwSingleBook />} />
        <Route path="/admin-books" element={<AdminBooks />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/admin-settings" element={<AdminSettings/>} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
    </>
  );
}

export default App;
