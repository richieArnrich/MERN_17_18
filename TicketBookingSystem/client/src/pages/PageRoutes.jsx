import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Places from "./Places";
import TicketBookPage from "./TicketBookPage";
function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/places" element={<Places />} />
        <Route path="/places/:id" element={<TicketBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
