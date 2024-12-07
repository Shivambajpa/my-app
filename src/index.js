import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Email } from "./Component/email";
// import Functionall from "./Component/ClassorFunctinalcomponent";
// import Greeting from "./Component/ClassorFunctinalcomponent/classcompone";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Email />
    <Functionall />
    <Greeting /> <App />
    <Email />
    <Functionall />
    <Greeting /> <App />
    <Email />
    <Functionall />
    <Greeting /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
