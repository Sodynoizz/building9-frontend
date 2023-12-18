import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/forget.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "./loading.jsx";

const ForgetURL = "https://building9-backend.vercel.app/api/auth/otp";
let email;

function Forget() {
    const [Email, setEmail] = useState("");
    const [Success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(ForgetURL, {
                email: Email,
                subject: "Password Reset",
                message: "Enter the code below to reset your password",
                duration: "0.05",
                environmentKey: import.meta.env.VITE_LOGRE,
            });
            setEmail("");
            setSuccess(true);
            setLoading(false);
            email = Email;
        } catch (error) {
            setLoading(false);
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
            setEmail("");
            toast.error("StudentID or Password is wrong", {
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
        <div className="forget_container">
            {loading ? (
                <LoadingPage />
            ) : (
                <div className="forget_container">
                    <div className="forg-header">
                        <h1>Forget Password</h1>
                    </div>
                    <div className="forg-input" action="">
                        <h2>Request OTP</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            value={Email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="forg-Submit">
                        {Success ? (
                            <Navigate to="/OTP" />
                        ) : (
                            <Link onClick={handleSubmit} to="/OTP">
                                Submit
                            </Link>
                        )}
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
            )}
        </div>
    );
}

export default Forget;
export { email };
