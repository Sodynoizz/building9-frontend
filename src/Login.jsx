import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/main-styles/font.css";
import "./assets/LogRe_styles/Login.css";
import Ticket from "./assets/img/Log_ticket.png";
import axios from "axios";
import App from "./App";

const LoginURL = "https://building9-backend.vercel.app/api/auth/login";

let StudentID;

function Login() {
    const [StudentId, setStudentId] = useState("");
    const [PassWord, setPassWord] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(StudentId, PassWord);
        console.log(import.meta.env.VITE_LOGRE);
        try {
            const response = await axios.post(LoginURL, {
                studentID: StudentId,
                password: PassWord,
                environmentKey: import.meta.env.VITE_LOGRE,
            });
            setStudentId("");
            setPassWord("");
            console.log(response?.data);
            setSuccess(true);
            StudentID = StudentId;
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else if (error.request) {
                setErrorMessage("Network error. Please try again later.");
            } else {
                setErrorMessage("An unexpected error occurred.");
            }
            setStudentId("");
            setPassWord("");
            setErrorMessage("StudentID or Password wrong");
        }
    };

    return (
        <div className="Content">
            <div className="ticket">
                <img src={Ticket} alt="" />
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
                                type="password"
                                placeholder="Password"
                                value={PassWord}
                                onChange={(event) =>
                                    setPassWord(event.target.value)
                                }
                            />
                            <Link to="/Forget_password" className="forget">
                                Forget password?
                            </Link>
                        </div>
                    </form>
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}
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
        </div>
    );
}
export default Login;
export { StudentID };
