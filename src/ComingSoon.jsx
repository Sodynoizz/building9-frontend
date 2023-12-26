import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/coming.scss";
import axios from "axios";
import Wheel from "./assets/img/wheel.png";
import moon from "./assets/img/moon.png";
import ballroon from "./assets/img/ballroon.png";
import castle from "./assets/img/castle.png";
import { AiFillHome } from "react-icons/ai";
function Coming() {
    return (
        <div className="Coming_container">
            <div className="Comingtext">
                <h1>"COMING SOON"</h1>
                <div>
                    <AiFillHome size={20} />
                    <Link to="/">return to home</Link>
                </div>
            </div>
            <div className="Coming_lower">
                <img src={Wheel} alt="" />
                <img src={castle} alt="" />
            </div>
            <img className="Moon" src={moon} alt="" />
            <img className="ballroon" src={ballroon} alt="" />
        </div>
    );
}

export default Coming;
