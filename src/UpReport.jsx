import React, { useState } from "react";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/Upreport.css";
import axios from "axios";
import { FaArrowUp } from "react-icons/fa";

const VoteInfoURL = `https://building9-backend.vercel.app/api/vote/getpollinfo/${
    import.meta.env.VITE_LOGRE
}`;

function UpReport() {
    const [selectedfile, setSelectedfile] = useState(null);
    const [Order, setOrder] = useState("");
    const [Members, setMembers] = useState("");
    const [Participants, setParticipants] = useState("");
    const handleUpload = async (e) => {
        console.log(selectedfile);
        console.log(Order);
        console.log(Members);
        console.log(Participants);
        console.log(import.meta.env.VITE_LOGRE);
        e.preventDefault();

        let data = new FormData();
        data.append("file", selectedfile);
        data.append("order", Order);
        data.append("members", parseInt(Members));
        data.append("participants", parseInt(Participants));
        data.append("environmentKey", import.meta.env.VITE_LOGRE);

        try {
            const response = await axios.post(
                "https://building9-backend.vercel.app/api/report/create",
                data
            );
            console.log(response.data);
            console.log("OKAY");
        } catch (error) {
            console.error(error);
        }
    };

    const handleFileSelect = (e) => {
        setSelectedfile(e.target.files[0]);
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedfile(file);
        }
    };
    return (
        <div className="UpReport_container">
            <div className="Upheader">
                <h1>
                    Upload <br /> รายงานการประชุม
                </h1>
            </div>
            <div className="Upsend">
                <div className="formup">
                    <h1>การประชุมครั้งที่ : </h1>
                    <input
                        type="text"
                        value={Order}
                        onChange={(event) => setOrder(event.target.value)}
                    />
                </div>
                <div className="formup">
                    <h1>จำนวนกต.ทั้งหมด : </h1>
                    <input
                        type="text"
                        value={Members}
                        onChange={(event) => setMembers(event.target.value)}
                    />
                </div>
                <div className="formup">
                    <h1>จำนวนกต.ที่เข้าร่วมประชุม : </h1>
                    <input
                        type="text"
                        value={Participants}
                        onChange={(event) =>
                            setParticipants(event.target.value)
                        }
                    />
                </div>
                <div className="dataup">
                    <h1>file รายงานการประชุม </h1>
                    <label htmlFor="actualBtn" onClick={handleFileSelect}>
                        Upload <FaArrowUp />
                    </label>
                    <span>
                        {selectedfile ? selectedfile.name : "No file chosen"}
                    </span>
                    <input
                        id="actualBtn"
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
            </div>
            <div className="Btn_up">
                <button className="SubmitUp" onClick={handleUpload}>
                    สร้าง
                </button>
            </div>
        </div>
    );
}

export default UpReport;
