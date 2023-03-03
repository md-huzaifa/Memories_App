import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../Auth/Auth";
import Home from "../Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default Router;
