import React from "react";
import "./assets/styles/reset.css";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { email } from "./Forget.jsx";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

const ReURL = "https://building9-backend.vercel.app/api/auth/reset";

let reSTID;

function Reset() {
    const [passwordType1, setPasswordType1] = useState("password");
    const [passwordType2, setPasswordType2] = useState("password");
    const [Password, setPassword] = useState("");
    const [ConPass, setConPass] = useState("");
    const [Success, setSuccess] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Password === ConPass) {
            try {
                const response = await axios.post(ReURL, {
                    email: email,
                    newpassword: Password,
                    environmentKey: import.meta.env.VITE_LOGRE,
                });
                console.log(response?.data.studentID);
                reSTID = response?.data.studentID;
                setPassword("");
                setConPass("");
                setSuccess(true);
                console.log("Success");
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
                    toast.error(error.message, {
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
                setPassword("");
                setConPass("");
                setSuccess(false);
                toast.error("Password is too short", {
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
        } else {
            toast.error("Password is no matching", {
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

    const togglePassword1 = () => {
        if (passwordType1 === "password") {
            setPasswordType1("text");
            return;
        }
        setPasswordType1("password");
    };
    const togglePassword2 = () => {
        if (passwordType2 === "password") {
            setPasswordType2("text");
            return;
        }
        setPasswordType2("password");
    };
    return (
        <div className="Reset_container">
            <div className="Reset_content">
                <div className="Re_header">
                    <h1>Reset Password</h1>
                </div>
                <div className="Re_Input">
                    <div className="passW">
                        <input
                            value={Password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder="Password *"
                            type={passwordType1}
                        />
                        <a onClick={togglePassword1} className="Eye">
                            {passwordType1 === "password" ? (
                                <AiFillEye color="#f51d8cff" size={24} />
                            ) : (
                                <AiFillEyeInvisible
                                    color="#f51d8cff"
                                    size={24}
                                />
                            )}
                        </a>
                    </div>
                    <div className="passW">
                        <input
                            value={ConPass}
                            onChange={(event) => setConPass(event.target.value)}
                            type={passwordType2}
                            placeholder="ยืนยัน Password *"
                        />
                        <a onClick={togglePassword2} className="Eye">
                            {passwordType2 === "password" ? (
                                <AiFillEye color="#f51d8cff" size={24} />
                            ) : (
                                <AiFillEyeInvisible
                                    color="#f51d8cff"
                                    size={24}
                                />
                            )}
                        </a>
                    </div>
                </div>
                <div className="Re_Submit">
                    {Success ? (
                        <Navigate to="/" />
                    ) : (
                        <a href="#" onClick={handleSubmit}>
                            Submit
                        </a>
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
export default Reset;
export { reSTID };
