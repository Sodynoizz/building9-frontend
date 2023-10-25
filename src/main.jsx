import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Forget from "./Forget.jsx";
import Regis from "./Regis.jsx";
import Info from "./information.jsx";
import NotFound from "./404.jsx";
import Loading_page from "./loading.jsx";
import OTP_page from "./otp.jsx";
import Reset_page from "./Reset.jsx";
import Prevote_page from "./Prevote.jsx";
import User_page from "./userinfo.jsx";
import Vote_page from "./vote.jsx";
import Commingsoon_page from "./ComingSoon.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Forget_password" element={<Forget />} />
                <Route path="/Regis" element={<Regis />} />
                <Route path="/Information" element={<Info />} />
                <Route path="/OTP" element={<OTP_page />} />
                <Route path="/loading" element={<Loading_page />} />
                <Route path="/Reset_password" element={<Reset_page />} />
                <Route path="/Prevote" element={<Prevote_page />} />
                <Route path="/User_info" element={<User_page />} />
                <Route path="/vote" element={<Vote_page />} />
                <Route path="/ComingSoon" element={<Commingsoon_page />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
