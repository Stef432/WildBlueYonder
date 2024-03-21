import React, { useState } from "react";
import "./App.css";
import AdminView from "./Components/AdminView";
import UserView from "./Components/UserView";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { ContactUs } from "./Components/ContactUs";
import ImageGrid from "./Components/ImageGrid.jsx";

function App() {
  //const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const toggleView = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
    navigate("/");
  };

  return (
    <div className="App">
      <main>
        <NavBar />

        <h1 style={{ color: "gold" }}>Secret Santa App</h1>

        <Routes>
          <Route path="/" element={<AdminView />} />
          <Route path="/donations" element={<UserView />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        {/* <button onClick={toggleView}>
          Switch to {isAdmin ? "User View" : "Admin View"}
        </button> */}
        {/* {isAdmin ? <AdminView /> : <UserView />} */}
      </main>
    </div>
  );
}

export default App;
