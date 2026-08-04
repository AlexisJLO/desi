import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Quiz from "./pages/Quiz.jsx";
import Memories from "./pages/Memories.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/desi" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);