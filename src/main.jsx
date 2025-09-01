import React from "react";
import ReactDOM from "react-dom/client";
import AppWithLoading from "./routes/AppWithLoading.jsx";
import VisitorTracker from "./Hooks/VisitorTracker.js"; 
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisitorTracker /> 
    <AppWithLoading />
  </React.StrictMode>
);