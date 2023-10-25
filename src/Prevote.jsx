import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/prevote.css";
import Topper from "./assets/img/topper.png";
import Ground from "./assets/img/ground.png";
import camp from "./assets/img/camp.png";
import Nine from "./assets/img/nine.png";
import Box from "./assets/img/box.png";
import axios from "axios";
import App from "./App";

function Prevote() {
    return (
        <div className="Prevote_container">
            <img className="Topper" src={Topper} alt="" />
            <div className="flood">
                <div className="house">
                    <img className="camp" src={camp} alt="" />
                </div>
                <img className="ground" src={Ground} alt="" />
            </div>
            <div className="text_pre">
                <div className="line_one">
                    <h1>BUILDIND</h1>
                    <img src={Nine} alt="" />
                </div>
                <div className="line_two">
                    <h1>V</h1>
                    <img src={Box} alt="" />
                    <h1>TING</h1>
                </div>
                <div className="line_three">
                    <h1>SYSTEM</h1>
                </div>
                <div className="btn">
                    <Link to="/vote">VOTE!</Link>
                </div>
            </div>
        </div>
    );
}

export default Prevote;
