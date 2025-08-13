// App.jsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppWithLoading from "./AppWithLoading.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithLoading />
  </React.StrictMode>
);