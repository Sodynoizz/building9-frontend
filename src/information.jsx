import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/info.scss";
import White from "./assets/img/white.jpg";
import User from "./assets/img/User.png";
import form from "./assets/img/info/form.png";
import group from "./assets/img/info/group.png";
import jula from "./assets/img/info/jula.png";
import pen from "./assets/img/info/pen.png";
import sign from "./assets/img/info/sign.png";
import website from "./assets/img/info/website.png";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import { motion } from "framer-motion";

function Info() {
    return (
        <div className="Info_Content">
            <div className="header_Info">
                <h1>
                    สารสนเทศนักเรียน <img src={User} alt="user" />
                </h1>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.5,
                }}
                className="Con_grid"
            >
                <div className="item">
                    <a href="http://43.229.77.153/~ztrad/tu_grade_online_2566/">
                        <img src={form} alt="" />
                    </a>
                    <h2>
                        ตรวจสอบผลการเรียน <br /> ( 43.229.77.153 )
                    </h2>
                </div>
                <div className="item">
                    <Link to="/Examroom">
                        <img src={sign} alt="" />
                    </Link>
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
            </motion.div>
            <div className="reHome">
                <Link to="/">
                    <AiFillHome size="20" />
                    <h1>ReturnHome</h1>
                </Link>
            </div>
        </div>
    );
}

export default Info;
