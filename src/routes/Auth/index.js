import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";

function index() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
    </Routes>
  );
}

export default index;
