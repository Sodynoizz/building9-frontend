import React, { useState, useMemo, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/Report.css";
import axios from "axios";

const GetpostURL = `https://building9-backend.vercel.app/api/report/get`;

function Report() {
    const [users, setUsers] = useState([]);
    const [Pdfname, setPdfname] = useState("");
    useEffect(() => {
        axios
            .post(GetpostURL, {
                environmentKey: import.meta.env.VITE_LOGRE,
            })
            .then((response) => {
                setUsers(response.data);
                setPdfname(users.data.files.name);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    function downloadPDF(pdf) {
        const linkSource = `data:application/pdf;base64,${pdf}`;
        const downloadLink = document.createElement("a");
        const fileName = Pdfname;

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }
    return (
        <div className="Report_container">
            <div className="header_report">
                <h1>รายงานการประชุม</h1>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>การประชุมครั้งที่</th>
                            <th>จำนวนกต.ทั้งหมด</th>
                            <th>เข้าร่วมประชุม</th>
                            <th>ร้อยละ</th>
                            <th>รายงานการประชุม</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.order}</td>
                                <td>{user.members}</td>
                                <td>{user.participants}</td>
                                <td>{user.percentage}</td>
                                <td>{downloadPDF(user.files)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Report;
