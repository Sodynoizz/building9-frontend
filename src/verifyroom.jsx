import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import sign from "./assets/img/sign.png";
import "./assets/styles/verify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { motion } from "framer-motion";

const SVerifyURL = "https://building9-backend.vercel.app/api/exam/check";

let room, number;

function Ver() {
    const [success, setSuccess] = useState(false);
    const [Room, setRoom] = useState("");
    const [Number, setNumber] = useState("");
    const [Nandata, setNandata] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(SVerifyURL, {
                classroom: parseInt(Room),
                no: parseInt(Number),
            });
            console.log(response);
            if (response?.data == "Not Found") {
                setNandata(true);
                toast.error("ไม่พบข้อมูล", {
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
            }
            room = Room;
            number = Number;
            setRoom("");
            setNumber("");
            setSuccess(true);
            if (response?.data.m == 6) {
                navigate("/ExM6_page");
            } else if (response?.data.m == 5 || response?.data.m == 4) {
                navigate("/ExM54_page");
            } else {
                console.log("error");
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message, {
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
            } else if (error.request) {
            } else {
                toast.error("An unexpected error occurred.", {
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
            }
            toast.error("ไม่พบข้อมูล", {
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
        }
    };
    return (
        <div className="Varify_container">
            <div className="contentVer">
                <div className="headerVer">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                        }}
                        className="headerVer1"
                    >
                        <h1>ระบบ</h1>
                        <img src={sign} alt="" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                        }}
                    >
                        ตรวจสอบห้องสอบ
                    </motion.h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                    }}
                    className="VerInput"
                >
                    <input
                        value={Room}
                        onChange={(event) => setRoom(event.target.value)}
                        placeholder="ห้องเรียน"
                        type="text"
                    />
                    <input
                        value={Number}
                        onChange={(event) => setNumber(event.target.value)}
                        placeholder="เลขที่"
                        type="text"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                    }}
                    className="Versubmit"
                >
                    <button onClick={handleSubmit}>ค้นหา</button>
                </motion.div>
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

export default Ver;
export { room, number };
