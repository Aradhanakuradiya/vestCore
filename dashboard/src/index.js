import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      </UserProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);