import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Welcome/Home";
import Login from "./components/Login/Login";
import LoginAs from "./components/LoginAs/LoginAs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import CareTaker from "./components/CareTaker/CareTaker";
import PetOwner from "./components/PetOwner/PetOwner";
import ManageAddress from "./components/ManageAddress/ManageAddress";
import ManagePets from "./components/ManagePets/ManagePets";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginas" element={<LoginAs />} />
        <Route path="/caretaker" element={<CareTaker />} />
        <Route path="/petowner" element={<PetOwner />} />
        <Route path="/manageaddress" element={<ManageAddress />} />
        <Route path="/managepets" element={<ManagePets />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
