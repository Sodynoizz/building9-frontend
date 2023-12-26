import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/Shop/mainshop.scss";
import Ms_Sign_header from "../src/assets/img/shop_img/sign_Header.png";
import Ms_Sign from "../src/assets/img/shop_img/signwood.png";
import Select from "react-select";
import axios from "axios";
import Ms_Pink_top from "./assets/img/shop_img/Pink_top.png";
import Ms_Pink_bottom from "./assets/img/shop_img/Pink_bottom.png";
import { motion } from "framer-motion";

const options = [{ value: "1", label: "รับที่ตึก 9" }];

const UserURL = "https://building9-backend.vercel.app/api/auth/profile";

function MainShop() {
    const [selectedOption, setSelectedOption] = useState(null);
    let [STDID, setSTDID] = useState(localStorage.getItem("STDID") || "");
    const [Name, setName] = useState("");
    const [Class, setClass] = useState("");
    const [Number, setNumber] = useState("");
    useEffect(() => {
        const Start = async (e) => {
            try {
                const response = await axios.post(UserURL, {
                    studentID: STDID,
                    environmentKey: import.meta.env.VITE_LOGRE,
                });
                console.log(response);
                setName(
                    response?.data.studentPrefix + response?.data.studentName
                );
                setClass(response?.data.studentRoom);
                setNumber(response?.data.studentNumber);
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
    }, []);
    return (
        <div className="Ms_container">
            <img src={Ms_Pink_top} className="Ms_img_top" alt="" />
            <div className="Ms_header">
                <img src={Ms_Sign_header} alt="" />
                <h1>รายละเอียดผู้สั่ง</h1>
            </div>
            <div className="Ms_Allcontent">
                <section className="Ms_Section1">
                    <div className="Ms_content">
                        <div className="Ms_listsCon">
                            <h1>ชื่อ :</h1>
                            <div className="Ms_listsCon_Name">
                                <p>{Name}</p>
                                <div className="Ms_listsCon_Class">
                                    <p>{Number}</p>
                                    <p>/</p>
                                    <p>{Class}</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="Ms_listsCon">
                            <h1>
                                สถานที่จัดส่ง / รับ (ภายในโรงเรียนเตรียมอุดม) :
                            </h1>
                            <Select
                                className="Ms_Dropdown"
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                placeholder="-เลือกสถานที่-"
                            />
                        </div>
                    </div>
                </section>
                <section className="Ms_Section2">
                    <div className="Ms_header_text">
                        <h1>เลือกชนิดผ้า</h1>

                        <div className="Ms_Card">
                            <img src="" alt="" />
                            <h2>ผ้าเรียบ</h2>
                        </div>
                        <div className="Ms_Card">
                            <img src="" alt="" />
                            <h2>ผ้าหยาบ</h2>
                        </div>
                    </div>
                </section>
                <section className="Ms_Section3">
                    <div className="Ms_header_text">
                        <h1>Size</h1>
                        <ul className="Ms_lists">
                            <li>
                                <input type="checkbox" />
                                <h2></h2>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <h2></h2>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <h2></h2>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <h2></h2>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <h2></h2>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className="MS_footer">
                <motion.button whileHover={{ scale: 1.2 }}>
                    <img src={Ms_Sign} alt="" />
                    <h1>ยืนยัน</h1>
                </motion.button>
            </div>
            <img src={Ms_Pink_bottom} className="Ms_img_bottom" alt="" />
        </div>
    );
}

export default MainShop;
