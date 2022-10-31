import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// pages
import List from "./pages/List";
import Home from "./pages/Home";

// components
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* List */}
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
