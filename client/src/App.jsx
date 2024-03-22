import React, { useState } from "react";
import "./App.css";
import HomeView from "./Components/HomeView";
import UserView from "./Components/UserView";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { ContactUs } from "./Components/ContactUs";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/donations" element={<UserView />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
