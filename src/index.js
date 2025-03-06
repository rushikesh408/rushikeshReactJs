import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import ProfileUpdate from "./ProfileUpdate";
import GettingProducts from "./ReadingAPI's/GettingProducts";
import UserList from "./Users/UserList";
import GetRegisteredCourses from "./GetRegisteredCourses";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/signup2" Component={SignUp} />
        <Route path="" Component={Home} />
        <Route path="/cooourses" Component={Courses}/>
        <Route path="/profileUpdate" Component={ProfileUpdate}/>
        <Route path="/api-reading" Component={GettingProducts}/>
        <Route path="/get-users" Component={UserList}/>
        <Route path="/registeredCourses" Component={GetRegisteredCourses}/>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  