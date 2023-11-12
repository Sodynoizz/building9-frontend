import React, { useState, useMemo, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/Report.css";
import axios from "axios";
import LoadingPage from "./loading.jsx";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const GetpostURL = `https://building9-backend.vercel.app/api/report/get`;
const DeletepostURL = `https://building9-backend.vercel.app/api/report/delete`;

function Report() {
    let admin_user = import.meta.env.VITE_ADMIN_MERGE;
    let [STDID, setSTDID] = useState(localStorage.getItem("STDID"));
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [Admin, setAdmin] = useState(false);
    const [Pdf, setPdf] = useState("");
    const [id, setid] = useState(0);
    const navigate = useNavigate();
    function refreshPage() {
        const timer = setTimeout(() => {
            window.location.reload(false);
        }, 1500);
        return () => clearTimeout(timer);
    }
    useEffect(() => {
        axios
            .post(GetpostURL, {
                environmentKey: import.meta.env.VITE_LOGRE,
            })
            .then((response) => {
                console.log(response);
                setUsers(response.data);
                setid(response.data.id);
            })
            .catch((error) => {
                console.log(error);
            });
        if (admin_user.includes(parseInt(STDID))) {
            setAdmin(true);
        }
    }, []);
    const handleDeleteReport = (reportNumber) => {
        if (!isNaN(reportNumber)) {
            axios
                .post(DeletepostURL, {
                    id: reportNumber,
                    environmentKey: import.meta.env.VITE_LOGRE,
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log("Report deleted: " + reportNumber);
        } else {
            console.log("Invalid report number");
        }
        refreshPage();
    };
    return (
        <div className="Report_container">
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                }}
                className="Report_container2"
            >
                <div className="header_report">
                    <h1>รายงานการประชุม</h1>
                </div>
                <div className="slidereport">
                    slide <MdOutlineKeyboardDoubleArrowRight />
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
                                    <td className="reduced-height">
                                        {user.order}
                                    </td>
                                    <td className="reduced-height">
                                        {user.members}
                                    </td>
                                    <td className="reduced-height">
                                        {user.participants}
                                    </td>
                                    <td className="reduced-height">
                                        {user.percentage}
                                    </td>
                                    <td className="reduced-height">
                                        <a
                                            href={user.files}
                                            className="btntoclick"
                                        >
                                            ดาวน์โหลด
                                        </a>
                                        {Admin ? (
                                            <button
                                                onClick={() =>
                                                    handleDeleteReport(user.id)
                                                }
                                                className="btntodelete"
                                            >
                                                <RiDeleteBin6Fill
                                                    color="white"
                                                    size={20}
                                                />
                                            </button>
                                        ) : (
                                            <div
                                                style={{ display: "none" }}
                                            ></div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {Admin ? (
                    <div className="btn-admin">
                        <Link to={"/UpReport_page"}>Update Report</Link>
                    </div>
                ) : (
                    <div></div>
                )}
            </motion.div>
        </div>
    );
}

export default Report;
