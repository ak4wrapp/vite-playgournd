import React from "react";
import Cards from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
