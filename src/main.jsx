import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Router, Routes, Route } from "react-router-dom";
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
import Final_page from "./finalvote.jsx";
import Commingsoon_page from "./ComingSoon.jsx";
import Checkvote_page from "./checkvote.jsx";
import UpReport_page from "./UpReport.jsx";
import Report_page from "./Report.jsx";
import Verify_page from "./verifyroom.jsx";
import ExM6_page from "./ExamroomM6.jsx";
import ExM54_page from "./ExamroomM54.jsx";
import MainShop from "./mainShop.jsx";
import SeaShop from "./seaShop.jsx";
import FinalShop from "./FinalShop.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter basename="/">
            <Routes>
                <Route path="/" index element={<App />} />
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
                <Route path="/final_page" element={<Final_page />} />
                <Route path="/ComingSoon" element={<Commingsoon_page />} />
                <Route path="/Checkvote_page" element={<Checkvote_page />} />
                <Route path="/UpReport_page" element={<UpReport_page />} />
                <Route path="/Report_page" element={<Report_page />} />
                <Route path="/Examroom" element={<Verify_page />} />
                <Route path="/ExM6_page" element={<ExM6_page />} />
                <Route path="/ExamM54" element={<ExM54_page />} />
                <Route path="/MainShop" element={<MainShop />} />
                <Route path="/SearchShop" element={<SeaShop />} />
                <Route path="/FinalShop" element={<FinalShop />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
