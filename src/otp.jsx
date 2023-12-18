import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./assets/styles/OTP.scss";
import { useState, useEffect } from "react";
import { email } from "./Forget.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const OTPURL = "https://building9-backend.vercel.app/api/auth/checkotp";
let Email = email;
function OTP() {
    const [OTP, setOTP] = useState("");
    const [Success, setSuccess] = useState(false);
    const handleSubmit = async (otp) => {
        try {
            const response = await axios.post(OTPURL, {
                email: email,
                otp: otp,
                environmentKey: import.meta.env.VITE_LOGRE,
            });
            setOTP("");
            setSuccess(true);
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
            setOTP("");
            toast.error("Uncorrect", {
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
    const handleOTPChange = (otp) => {
        setOTP(otp);
        if (otp.length >= 4) {
            handleSubmit(otp);
        }
    };
    return (
        <div className="OTP_container">
            <div className="OTP_content">
                <div className="OTP_header">
                    <h1>กรอกรหัส OTP</h1>
                </div>
                <div className="OTP_IN">
                    {Success ? (
                        <Navigate to="/Reset_password" />
                    ) : (
                        <OTPInput
                            value={OTP}
                            onChange={handleOTPChange}
                            autoFocus
                            OTPLength={4}
                            otpType="number"
                            disabled={false}
                            inputContainerStyles={{ width: "500px" }}
                        />
                    )}
                </div>
                <div className="reman_time">
                    <p>remaning time:</p>
                    <ResendOTP
                        onResendClick={() => console.log("Resend clicked")}
                        maxTime={180}
                    />
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
export default OTP;
