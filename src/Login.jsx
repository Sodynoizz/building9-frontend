import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/LogRe_styles/Login.css";
import Ticket from "./assets/img/Log_ticket.png";
import TicketPhone from "./assets/img/Ticket_Phone.png";
import TicketfPhone from "./assets/img/ticketfphone.png";
import axios from "axios";
import App from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginURL = "https://building9-backend.vercel.app/api/auth/login";

let StudentID;

function Login() {
    const [passwordType, setPasswordType] = useState("password");
    const [StudentId, setStudentId] = useState("");
    const [PassWord, setPassWord] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LoginURL, {
                studentID: StudentId,
                password: PassWord,
                environmentKey: import.meta.env.VITE_LOGRE,
            });
            setStudentId("");
            setPassWord("");
            setSuccess(true);
            StudentID = StudentId;
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message, {
                    className: "error-message",
                    progressBar: true,
                    hideProgressBar: false,
                    progressStyle: {
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
            setStudentId("");
            setPassWord("");
            toast.error("StudentID or Password is wrong", {
                className: "error-message",
                progressBar: true,
                hideProgressBar: false,
                progressStyle: {
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
    const handleFormSubmit = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            return;
        }
        setPasswordType("password");
    };
    return (
        <div className="Content">
            <div className="ticket">
                <img src={Ticket} alt="" />
                <img src={TicketPhone} alt="" />
                <img src={TicketfPhone} alt="" />
                <div className="text">
                    <div className="head">
                        <h1>Log in</h1>
                    </div>
                    <form>
                        <input
                            type="text"
                            value={StudentId}
                            onChange={(event) =>
                                setStudentId(event.target.value)
                            }
                            placeholder="เลขประจำตัว"
                        />
                        <div className="Log_pas">
                            <input
                                type={passwordType}
                                placeholder="Password"
                                value={PassWord}
                                onChange={(event) =>
                                    setPassWord(event.target.value)
                                }
                                onKeyPress={handleFormSubmit}
                            />
                            <a onClick={togglePassword} className="Eye">
                                {passwordType === "password" ? (
                                    <AiFillEye color="#f51d8cff" size={24} />
                                ) : (
                                    <AiFillEyeInvisible
                                        color="#f51d8cff"
                                        size={24}
                                    />
                                )}
                            </a>
                            <Link to="/Forget_password" className="forget">
                                Forgot password?
                            </Link>
                        </div>
                    </form>
                    <div className="SB">
                        {success ? (
                            <Navigate to="/" />
                        ) : (
                            <button onClick={handleSubmit}>Submit</button>
                        )}
                        <Link to="/Regis">Register</Link>
                    </div>
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
export default Login;
export { StudentID };
