import React from "react";
import "./assets/styles/reset.css";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Reset() {
    const [passwordType1, setPasswordType1] = useState("password");
    const [passwordType2, setPasswordType2] = useState("password");
    const [Password, setPassword] = useState("");
    const [ConPass, setConPass] = useState("");

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
                    <a href="#">Submit</a>
                </div>
            </div>
        </div>
    );
}
export default Reset;
