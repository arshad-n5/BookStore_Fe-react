import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import Auth from "./Pages/Auth";
import Profile from "./Pages/profile";


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
      </Routes>
    </>
  );
}

export default App;
