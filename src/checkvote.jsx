import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import shirt1 from "./assets/img/shirt1.png";
import shirt2 from "./assets/img/shirt2.png";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/checkvote.css";
import axios from "axios";

const VotedURL = `https://building9-backend.vercel.app/api/vote/getvote/${
    import.meta.env.VITE_LOGRE
}`;

const VoteInfoURL = `https://building9-backend.vercel.app/api/vote/getpollinfo/${
    import.meta.env.VITE_LOGRE
}`;

const EndVoteURL = `https://building9-backend.vercel.app/api/vote/ended`;

function CheckV() {
    const [Allvote, setAllvote] = useState("");
    const [Numvote, setNumvote] = useState([]);
    const numofvote = import.meta.env.VITE_STUDENT_IDS.split(",");
    const [Unvoteall, setUnvoteall] = useState("");
    const [Number1, setNumber1] = useState(0);
    const [Number2, setNumber2] = useState(0);
    const [Number3, setNumber3] = useState(0);
    const [name1, setname1] = useState("");
    const [description1, setdescription1] = useState("");
    const [name2, setname2] = useState("");
    const [description2, setdescription2] = useState("");
    const [name3, setname3] = useState("");
    const [End, setEnd] = useState(false);

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post(EndVoteURL, {
                ended: !End,
                environmentKey: import.meta.env.VITE_LOGRE,
            });
            console.log("Okay");
        } catch (error) {
            console.error(error);
        }
        window.location.reload();
    };

    useEffect(() => {
        axios.get(VotedURL).then((response) => {
            setAllvote(response?.data.votes);
            setNumvote(response?.data.participants);
            setNumber1(response?.data.choices[0]["1"].votes);
            setNumber2(response?.data.choices[1]["2"].votes);
            setNumber3(response?.data.choices[2]["3"].votes);
        });
    }, []);
    useEffect(() => {
        axios.get(VoteInfoURL).then((response) => {
            setname1(response?.data.choices[0].name);
            setdescription1(response?.data.choices[0].description);
            setname2(response?.data.choices[1].name);
            setdescription2(response?.data.choices[1].description);
            setname3(response?.data.choices[2].name);
            setEnd(response?.data.ended);
            console.log(response);
        });
    }, []);
    useEffect(() => {
        const Numvotestr = Numvote.map((num) => num.toString());
        const unvoteall = numofvote.filter((x) => !Numvotestr.includes(x));
        setUnvoteall(unvoteall.length);
    }, []);
    return (
        <div className="Check_container">
            <div className="CheckHeader">
                <div className="voted">
                    <h1>มาใช้สิทธิ์: {Allvote} คน</h1>
                </div>
                <div className="unvote">
                    <h1>ไม่มาใช้สิทธิ์: {Unvoteall} คน</h1>
                </div>
                {End ? (
                    <button
                        onClick={() => {
                            if (
                                window.confirm(
                                    "Are you sure you wish to open this vote?"
                                )
                            )
                                handleSubmit();
                        }}
                        className="btn_open"
                    >
                        เปิดโหวดอีกครั้ง
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            if (
                                window.confirm(
                                    "Are you sure you wish to close this vote?"
                                )
                            )
                                handleSubmit();
                        }}
                        className="btn_close"
                    >
                        ปิดโหวด
                    </button>
                )}
            </div>
            <div className="CheckBody">
                <div className="Number">
                    <div className="header-item">{name1}</div>
                    <div className="content-item">
                        <img src={shirt1} alt="" />
                        <p>{description1}</p>
                    </div>
                    <div className="many">ใช้สิทธิ์แล้ว: {Number1} คน</div>
                </div>
                <div className="Number">
                    <div className="header-item">{name2}</div>
                    <div className="content-item">
                        <img src={shirt2} alt="" />
                        <p>{description2}</p>
                    </div>
                    <div className="many">ใช้สิทธิ์แล้ว: {Number2} คน</div>
                </div>
                <div className="Number">
                    <div className="header-item">{name3}</div>
                    <div className="content-item">ไม่ประสงค์ลงคะแนน</div>
                    <div className="many">ใช้สิทธิ์แล้ว: {Number3} คน</div>
                </div>
            </div>
        </div>
    );
}

export default CheckV;
