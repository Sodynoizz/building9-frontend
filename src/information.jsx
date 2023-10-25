import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/info.css";
import White from "./assets/img/white.jpg";
import User from "./assets/img/User.png";
import form from "./assets/img/info/form.png";
import group from "./assets/img/info/group.png";
import jula from "./assets/img/info/jula.png";
import pen from "./assets/img/info/pen.png";
import sign from "./assets/img/info/sign.png";
import website from "./assets/img/info/website.png";
import axios from "axios";
import App from "./App";

function Info() {
    return (
        <div className="Info_Content">
            <div className="header_Info">
                <h1>
                    สารสนเทศนักเรียน <img src={User} alt="user" />
                </h1>
            </div>
            <div className="Con_grid">
                <div className="item">
                    <a href="http://43.229.77.153/~ztrad/tu_grade_online_2566/">
                        <img src={form} alt="" />
                    </a>
                    <h2>
                        ตรวจสอบผลการเรียน <br /> ( 43.229.77.153 )
                    </h2>
                </div>
                <div className="item">
                    <a href="">
                        <img src={sign} alt="" />
                    </a>
                    <h2>ตรวจสอบห้องสอบ</h2>
                </div>
                <div className="item">
                    <a href="https://www.triamudom.ac.th/website/">
                        <img src={jula} alt="" />
                    </a>
                    <h2>
                        website โรงเรียน <br /> ( trimudom.ac.th )
                    </h2>
                </div>
                <div className="item">
                    <a href="https://register.clubs.triamudom.ac.th/">
                        <img src={website} alt="" />
                    </a>
                    <h2>
                        TUCMC <br /> ( ระบบลงทะเบียนชมรม )
                    </h2>
                </div>
                <div className="item">
                    <a href="https://sites.google.com/view/tusc2023/หนาหลก%3Fauthuser=0">
                        <img src={group} alt="" />
                    </a>
                    <h2>
                        TUSC <br /> ( คณะกรรมการนักเรียน )
                    </h2>
                </div>
                <div className="item">
                    <a href="https://tuscstudybuddy.pythonanywhere.com/login">
                        <img src={pen} alt="" />
                    </a>
                    <h2>TUSC Study Buddy</h2>
                </div>
            </div>
        </div>
    );
}

export default Info;
