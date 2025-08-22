// main.jsx - Updated to include VisitorTracker
import React from "react";
import ReactDOM from "react-dom/client";
import AppWithLoading from "./routes/AppWithLoading.jsx";
import VisitorTracker from "./Hooks/VisitorTracker.js"; // Add this import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisitorTracker /> {/* Add visitor tracker here */}
    <AppWithLoading />
  </React.StrictMode>
);