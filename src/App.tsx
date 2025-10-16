import React from "react";
import "./App.css";
import Providers from "./provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

const App: React.FC = () => {
  return (
    <Providers>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </Providers>
  );
};

export default App;