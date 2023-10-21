import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Forget from "./Forget.jsx";
import Regis from "./Regis.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Forget_password" element={<Forget />} />
                <Route path="/Regis" element={<Regis />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
