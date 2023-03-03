import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../components/Auth/Auth";
import Home from "../components/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default Router;
