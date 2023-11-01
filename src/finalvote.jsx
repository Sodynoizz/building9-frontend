import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/finalvote.css";
import Smalltent from "./assets/img/small_tent.png";
import axios from "axios";
import { BsCheckCircleFill } from "react-icons/bs";

const VoteInfoURL = `https://building9-backend.vercel.app/api/vote/getpollinfo/${
    import.meta.env.VITE_LOGRE
}`;

function FinV() {
    const [Name, setName] = useState("");
    useEffect(() => {
        axios.get(VoteInfoURL).then((response) => {
            setName(response?.data.name);
        });
    }, []);
    return (
        <div className="Finvote_container">
            <h1>
                <BsCheckCircleFill className="topf" size={100} color="lime" />
                บันทึกการลงคะแนนเรียบร้อย{" "}
                <BsCheckCircleFill className="bottomf" color="lime" />
            </h1>
            <h2>ขอบคุณที่มาใช้สิทธิ์ลงคะแนนใน</h2>
            <h3>"{Name}"</h3>
            <div className="Btn_home">
                <Link to="/">
                    <img src={Smalltent} alt="" />
                    HOME
                </Link>
            </div>
        </div>
    );
}

export default FinV;
