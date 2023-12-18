import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/Shop/finalshop.scss";
import Ms_Sign_header from "../src/assets/img/shop_img/sign_Header.png";
import Ms_Sign from "../src/assets/img/shop_img/signwood.png";
import Select from "react-select";
import axios from "axios";
import Ms_Pink_top from "./assets/img/shop_img/Pink_top.png";
import Ms_Pink_bottom from "./assets/img/shop_img/Pink_bottom.png";
import { motion } from "framer-motion";

function FinalShop() {
    return (
        <div className="Ms_container">
            <img src={Ms_Pink_top} className="Ms_img_top" alt="" />
            <div className="Ms_header">
                <img src={Ms_Sign_header} alt="" />
                <h1>ชำระเงิน</h1>
            </div>
            <div className="Ms_Allcontent">
                <div className="FS_content">
                    <img src="" alt="" />
                    <div className="FS_Conprop">
                        <h1>ช่องทางชำระเงิน</h1>
                        <h1>ธนาคารกสิกรไทย เลขบัญชี</h1>
                        <h1>ชื่อบัญชี : นางสาวฉัตรชนก น้ำดอกไม้</h1>
                    </div>
                </div>
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

export default FinalShop;
