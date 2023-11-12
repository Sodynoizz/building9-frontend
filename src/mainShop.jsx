import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/Shop/mainshop.css";
import Select from "react-select";
import axios from "axios";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];
function MainShop() {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div className="Ms_container">
            <section className="Ms_Section1">
                <div className="Ms_header">
                    <h1>รายละเอียดผู้สั่ง</h1>
                </div>
                <div className="Ms_content">
                    <div className="Ms_listsCon">
                        <h1>ชื่อ :</h1>
                    </div>
                    <div className="Ms_listsCon">
                        <h1>สถานที่จัดส่ง / รับ (ภายในโรงเรียนเตรียมอุดม) :</h1>
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
                <div className="Ms_header">
                    <h1>เลือกชนิดผ้า</h1>
                    <div className="Ms_Card">
                        <img src="" alt="" />
                        <h1>ผ้าเรียบ</h1>
                    </div>
                    <div className="Ms_Card">
                        <img src="" alt="" />
                        <h1>ผ้าหยาบ</h1>
                    </div>
                </div>
            </section>
            <section className="Ms_Section3">
                <div className="Ms_header">
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
            <div className="submit">
                <button>Submit</button>
            </div>
        </div>
    );
}

export default MainShop;
