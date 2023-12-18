import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/img/logo.png";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/exam.scss";
import { room, number } from "./verifyroom";
import html2canvas from "html2canvas";
import axios from "axios";
import { IoReturnDownBackOutline } from "react-icons/io5";

const SVerifyURL = "https://building9-backend.vercel.app/api/exam/check";

function ExM6() {
    const [RoomOne, setRoomOne] = useState("");
    const [FloorOne, setFloorOne] = useState("");
    const [BuilOne, setBuilOne] = useState("");
    const [Mai, setMai] = useState("");
    const [screenshotURL, setScreenshotURL] = useState(null);

    const captureScreenshot = () => {
        html2canvas(document.body).then((canvas) => {
            const dataURL = canvas.toDataURL();
            uploadToImgur(dataURL);
        });
    };

    const uploadToImgur = async (dataURL) => {
        const apiKey = import.meta.env.VITE_CLIENT_ID;
        const apiUrl = "https://api.imgur.com/3/image";

        try {
            const response = await axios.post(apiUrl, dataURL, {
                headers: {
                    Authorization: `Client-ID ${apiKey}`,
                    "Content-Type": "image/*",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            const imgurLink = response.data.data.link;
            setScreenshotURL(imgurLink);
        } catch (error) {
            console.error("Error uploading image to Imgur:", error);
        }
    };
    //base64 to imgUrl

    useEffect(() => {
        const Start = async () => {
            try {
                const response = await axios.post(SVerifyURL, {
                    classroom: room,
                    no: number,
                });
                setRoomOne(response.data.examroom.room);
                setFloorOne(response.data.examroom.floor);
                setBuilOne(response.data.examroom.building);
                setMai(response.data.m);
            } catch (error) {
                console.error("An unexpected error occurred:", error);
            }
        };
        Start();
    }, []);

    return (
        <div className="Ex_container">
            <div className="ExCard">
                <div className="Exdetail">
                    <div className="Exheader">
                        <h1>ม.{Mai}</h1>
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
                        <h1>ห้องสอบวันที่ 18 , 20 และ 25 ธันวาคม 2566</h1>
                        <div className="Excontentx">
                            <div className="Exclassroom">
                                <h1>ห้องสอบ</h1>
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
                </div>
                <div className="Exbottom">
                    <div className="ExRe">
                        <Link className="ReBtn" to="/Examroom">
                            return <IoReturnDownBackOutline />
                        </Link>
                    </div>
                    {/* <div className="Insbtn">
                        <button onClick={captureScreenshot}>
                            Capture Screenshot
                        </button>
                        {screenshotURL && (
                            <div>
                                <p>Uploaded to Imgur:</p>
                                <img src={screenshotURL} alt="Screenshot" />
                            </div>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ExM6;
