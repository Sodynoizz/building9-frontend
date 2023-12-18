import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import User_img from "./assets/img/User.png";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/User_info.scss";
import axios from "axios";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import LoadingPage from "./loading.jsx";
import { motion } from "framer-motion";

const UserURL = "https://building9-backend.vercel.app/api/auth/profile";

function User() {
    let admin_user = import.meta.env.VITE_ADMIN_MERGE;
    let [STDID, setSTDID] = useState(localStorage.getItem("STDID"));
    const [Fullname, setFullname] = useState("");
    const [Nickname, setNickname] = useState("");
    const [STRoom, setSTRoom] = useState("");
    const [Tel, setTel] = useState("");
    const [Instagram, setInstagram] = useState("");
    const [Email, setEmail] = useState("");
    const [STNum, setSTNum] = useState("");
    const [LineID, setLineID] = useState("");
    const [Fackbook, setFackbook] = useState("");
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Admin, setAdmin] = useState(false);
    useEffect(() => {
        const Start = async () => {
            try {
                setLoading(true);
                const response = await axios.post(UserURL, {
                    studentID: STDID,
                    environmentKey: import.meta.env.VITE_LOGRE,
                });
                setCheck(true);
                setFullname(response?.data.studentName);
                setNickname(response?.data.studentNickname);
                setSTRoom(response?.data.studentRoom);
                setTel(response?.data.tel);
                setInstagram(response?.data.instagram);
                setEmail(response?.data.email);
                setSTNum(response?.data.studentNumber);
                setLineID(response?.data.lineID);
                setFackbook(response?.data.facebook);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                } else if (error.request) {
                    setErrorMessage("Network error. Please try again later.");
                } else {
                    setErrorMessage("An unexpected error occurred.");
                }
            }
        };
        Start();
        if (admin_user.includes(parseInt(STDID))) {
            setAdmin(true);
        }
    }, []);
    return (
        <div className="User_container">
            {loading ? (
                <LoadingPage />
            ) : (
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="User_topper"
                    >
                        <img src={User_img} alt="" />
                        <div className="username">
                            <h1>{Fullname}</h1>
                            <h2>
                                {STNum} / {STRoom}
                            </h2>
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                            href="/"
                        >
                            <AiFillHome />
                            Back to Home
                        </motion.a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="User_header"
                    >
                        <h1>ข้อมูลส่วนตัว</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="User_content"
                    >
                        <div className="User_first">
                            <div>
                                <h2>ชื่อ-นามสกุล : </h2>
                                <p>{Fullname}</p>
                            </div>
                            <div>
                                <h2>ชื่อเล่น : </h2>
                                <p>{Nickname}</p>
                            </div>
                            <div>
                                <h2>เลขประจำตัวนักเรียน : </h2>
                                <p>{STDID}</p>
                            </div>
                        </div>
                        <div className="User_two">
                            <div className="Room">
                                <div>
                                    <h2>ห้อง : </h2>
                                    <p>{STRoom}</p>
                                </div>
                                <div>
                                    <h2>Tel : </h2>
                                    <p>{Tel}</p>
                                </div>
                                <div>
                                    <h2>Instagram : </h2>
                                    <p>{Instagram}</p>
                                </div>
                                <div>
                                    <h2>Email : </h2>
                                    <p>{Email}</p>
                                </div>
                            </div>
                            <div className="Number">
                                <div>
                                    <h2>เลขที่ : </h2>
                                    <p>{STNum}</p>
                                </div>
                                <div>
                                    <h2>Line ID : </h2>
                                    <p>{LineID}</p>
                                </div>
                                <div>
                                    <h2>Facebook : </h2>
                                    <p>{Fackbook}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="User_footer">
                        <BsFillExclamationTriangleFill color="#f29bc0" />
                        <div>
                            <p>หากต้องการแก้ไขข้อมูลส่วนตัว</p>
                            <p> โปรดติดต่อคณะกรรมการตึก ๙</p>
                        </div>
                    </div>
                    <div className="Check_vote">
                        {Admin ? (
                            <Link to="/Checkvote_page">Check Vote!</Link>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default User;
