import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/Shop/ss.scss";
import Ms_Sign_header from "../src/assets/img/shop_img/sign_Header.png";
import Ms_Sign from "../src/assets/img/shop_img/signwood.png";
import Select from "react-select";
import axios from "axios";
import Ms_Pink_top from "./assets/img/shop_img/Pink_top.png";
import Ms_Pink_bottom from "./assets/img/shop_img/Pink_bottom.png";
import { motion } from "framer-motion";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SeaShop() {
    return (
        <div className="Ms_container">
            <img src={Ms_Pink_top} className="Ms_img_top" alt="" />
            <div className="Ms_header">
                <img src={Ms_Sign_header} alt="" />
                <h1>คำสั่งซื้อ</h1>
            </div>
            <section class="SS_form">
                <form action="">
                    <motion.input
                        whileTap={{ scale: 0.95 }}
                        type="number"
                        placeholder="เลขที่คำสั่งซื้อ"
                    />
                    <motion.input
                        whileTap={{ scale: 0.95 }}
                        type="text"
                        placeholder="เลขที่ / ห้อง ผู้ส่ง"
                    />
                </form>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                    }}
                    className="SS_Submit_btn"
                >
                    <h1>Submit</h1>
                    <HiMiniMagnifyingGlass size={20} />
                </motion.button>
            </section>
            <div className="SS_footer"></div>
            <img src={Ms_Pink_bottom} className="Ms_img_bottom" alt="" />
        </div>
    );
}

export default SeaShop;
