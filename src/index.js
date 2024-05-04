import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <Weather defaultcity="Tehran" />

  // </React.StrictMode>
);

reportWebVitals();
