import { useEffect, useState } from "react";
import Render from "./components/Render";
import Slider from "./components/Slider";
import MainLayout from "./layouts/Main_layout/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <div className="max-w-[1360px] w-full mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
