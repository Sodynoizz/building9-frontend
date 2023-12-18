import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/prevote.scss";
import Topper from "./assets/img/topper.png";
import Ground from "./assets/img/ground.png";
import camp from "./assets/img/camp.png";
import Nine from "./assets/img/nine.png";
import Box from "./assets/img/box.png";
import axios from "axios";
import App from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VoteInfoURL = `https://building9-backend.vercel.app/api/vote/getpollinfo/${
    import.meta.env.VITE_LOGRE
}`;

function Prevote() {
    const [End, setEnd] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(VoteInfoURL).then((response) => {
            setEnd(response?.data.ended);
            console.log(response);
        });
    }, []);
    const notify = () => {
        toast.error("ไม่อยู่ในเวลาที่สามารถลงคะแนนได้", {
            className: "error-message",
            progressBar: true,
            hideProgressBar: false,
            progressStyle: {
                background: "rgb(255,168,212)",
                background:
                    "linear-gradient(90deg, rgba(255,168,212,1) 0%, rgba(245,119,185,1) 38%, rgba(245,29,140,1) 100%)",
                height: "5px",
            },
            style: {
                fontFamily: "MN_Light",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "rgba(245,119,185,1)",
            },
        });
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);
        return () => clearTimeout(timer);
    };
    return (
        <div className="Prevote_container">
            <img className="Topper" src={Topper} alt="" />
            <div className="flood">
                <div className="house">
                    <img className="camp" src={camp} alt="" />
                </div>
                <img className="ground" src={Ground} alt="" />
            </div>
            <div className="text_pre">
                <div className="line_one">
                    <h1>BUILDING</h1>
                    <img src={Nine} alt="" />
                </div>
                <div className="line_two">
                    <h1>V</h1>
                    <img src={Box} alt="" />
                    <h1>TING</h1>
                </div>
                <div className="line_three">
                    <h1>SYSTEM</h1>
                </div>
                <div className="btn">
                    {End ? (
                        <div>
                            <Link onClick={notify}>VOTE!</Link>
                        </div>
                    ) : (
                        <Link to="/vote">VOTE!</Link>
                    )}
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Prevote;
