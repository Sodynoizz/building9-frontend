import React from "react";
import { ProgressBar } from "react-loader-spinner";
import "./assets/styles/loading.scss";

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <ProgressBar
                height="200"
                width="200"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor="#f51d8cff"
                barColor="#fc8bc7ff"
            />
            <p>Loading...</p>
        </div>
    );
};

export default LoadingPage;
