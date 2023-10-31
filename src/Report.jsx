import React, { useStat, useMemo } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/Report.css";
import axios from "axios";
import { useTable } from "react-table";

function Report() {
    return (
        <div className="Report_container">
            <div className="header_report">
                <h1>รายงานการประชุม</h1>
            </div>
        </div>
    );
}

export default Report;
