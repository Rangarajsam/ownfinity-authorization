import React from "react";
import "./App.css";
import Providers from "./provider";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

const App: React.FC = () => {
  const currentPath = window.location.pathname;
  const stripLoginPrefix = (path: string) => {
    if (path.startsWith("/login")) {
      const stripped = path.replace("/login", "");
      return stripped === "" ? "/" : stripped;
    }
    return path.startsWith("/") ? path : "/";
  };

  const initialPath = stripLoginPrefix(currentPath);

  return (
    <Providers>
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MemoryRouter>
    </Providers>
  );
};

export default App;