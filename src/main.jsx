import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Quiz from "./pages/Quiz.jsx";
import Memories from "./pages/Memories.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/desi/quiz" element={<Quiz />} />
        <Route path="/desi/memories" element={<Memories />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);