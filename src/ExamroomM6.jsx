import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.scss";
import logo from "./assets/img/logo.png";
import "./assets/styles/exam.scss";
import { room, number } from "./verifyroom";
import axios from "axios";
import { IoReturnDownBackOutline } from "react-icons/io5";

const SVerifyURL = "https://building9-backend.vercel.app/api/exam/check";

function ExM6() {
    const [RoomOne, setRoomOne] = useState("");
    const [FloorOne, setFloorOne] = useState("");
    const [BuilOne, setBuilOne] = useState("");
    const [RoomTwo, setRoomTwo] = useState("");
    const [FloorTwo, setFloorTwo] = useState("");
    const [BuilTwo, setBuilTwo] = useState("");
    useEffect(() => {
        const Start = async (e) => {
            try {
                const response = await axios.post(SVerifyURL, {
                    classroom: room,
                    no: number,
                });
                setRoomOne(response.data.examroom.room);
                setFloorOne(response.data.examroom.floor);
                setBuilOne(response.data.examroom.building);
                setRoomTwo(response.data.examroom2.room);
                setFloorTwo(response.data.examroom2.floor);
                setBuilTwo(response.data.examroom2.building);
            } catch (error) {
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
        <div className="Ex_container">
            <div className="ExCard">
                <div className="Exlogo">
                    <Link className="ReBtn" to="/Verify_page">
                        return <IoReturnDownBackOutline />
                    </Link>
                </div>
                <div className="Exdetail">
                    <div className="Exheader">
                        <h1>ม.6</h1>
                        <div className="Exclassroom">
                            <h1>ห้อง</h1>
                            <h1>{room}</h1>
                        </div>
                        <div className="Exnumber">
                            <h1>เลขที่</h1>
                            <h1>{number}</h1>
                        </div>
                    </div>
                    <div className="Excontent">
                        <h1>ห้องสอบวันที่ 19 และ 26 ธันวาคม 2566</h1>
                        <div className="Excontentx">
                            <div className="Exclassroom">
                                <h1>ห้อง</h1>
                                <h1>{RoomOne}</h1>
                            </div>
                            <div className="Exbuil">
                                <h1>{BuilOne}</h1>
                            </div>
                            <div className="Exfloor">
                                <h1>ชั้น</h1>
                                <h1>{FloorOne}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="Excontent">
                        <h1>ห้องสอบวันที่ 21 ธันวาคม 2566</h1>
                        <div className="Excontentx">
                            <div className="Exclassroom">
                                <h1>ห้อง</h1>
                                <h1>{RoomTwo}</h1>
                            </div>
                            <div className="Exbuil">
                                <h1>{BuilTwo}</h1>
                            </div>
                            <div className="Exfloor">
                                <h1>ชั้น</h1>
                                <h1>{FloorTwo}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExM6;
