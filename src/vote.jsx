import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/vote.css";
import white from "./assets/img/white.jpg";
import axios from "axios";

const VoteURL =
    "https://building9-backend.vercel.app/api/vote/getpollinfo/0a014f78beca4264f74a39d8d8c1f26f746c304be15a3e8dfb257337d4e7462c";

function Vote() {
    const [name1, setname1] = useState("");
    const [description1, setdescription1] = useState("");
    const [thumbnail_link1, setthumbnail_link1] = useState("");
    const [name2, setname2] = useState("");
    const [description2, setdescription2] = useState("");
    const [thumbnail_link2, setthumbnail_link2] = useState("");
    const [name3, setname3] = useState("");
    useEffect(() => {
        axios.get(VoteURL).then((response) => {
            setname1(response?.data.choices[0].name);
            setdescription1(response?.data.choices[0].description);
            setthumbnail_link1(response?.data.choices[0].thumbnail_link);
            setname2(response?.data.choices[1].name);
            setdescription2(response?.data.choices[1].description);
            setthumbnail_link2(response?.data.choices[1].thumbnail_link);
            setname3(response?.data.choices[2].name);
        });
    }, []);
    return (
        <div className="Vote_container">
            <div className="vote_Content">
                <div className="choice1">
                    <div className="vote_header">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <h1>{name1}</h1>
                    </div>
                    <img src={white} alt="" />
                    <div className="vote_des">
                        <p>{description1}</p>
                    </div>
                </div>
                <div className="choice2">
                    <div className="vote_header">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <h1>{name2}</h1>
                    </div>
                    <img src={white} alt="" />
                    <div className="vote_des">
                        <p>{description2}</p>
                    </div>
                </div>
                <div className="choice3">
                    <div className="vote_header">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <h1>{name3}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vote;
