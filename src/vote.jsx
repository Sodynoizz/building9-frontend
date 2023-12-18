import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/vote.scss";
import white from "./assets/img/white.jpg";
import shirt1 from "./assets/img/shirt1.png";
import shirt2 from "./assets/img/shirt2.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VoteInfoURL = `https://building9-backend.vercel.app/api/vote/getpollinfo/${
    import.meta.env.VITE_LOGRE
}`;

const VoteURL = "https://building9-backend.vercel.app/api/vote/vote";

function Vote() {
    const [name, setname] = useState("");
    const [name1, setname1] = useState("");
    const [description1, setdescription1] = useState("");
    const [name2, setname2] = useState("");
    const [description2, setdescription2] = useState("");
    const [name3, setname3] = useState("");
    const [selectedChoice, setSelectedChoice] = useState(0);
    let [STDID, setSTDID] = useState(localStorage.getItem("STDID"));
    const [Success, setSuccess] = useState(false);

    useEffect(() => {
        axios.get(VoteInfoURL).then((response) => {
            setname(response?.data.name);
            setname1(response?.data.choices[0].name);
            setdescription1(response?.data.choices[0].description);
            setname2(response?.data.choices[1].name);
            setdescription2(response?.data.choices[1].description);
            setname3(response?.data.choices[2].name);
        });
    }, []);

    const handleChange = (choiceNumber) => {
        setSelectedChoice(choiceNumber);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(VoteURL, {
                studentID: STDID,
                value: selectedChoice.toString(),
                environmentKey: import.meta.env.VITE_LOGRE,
            });
            setSuccess(true);
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message, {
                    className: "error-message",
                    progressBar: true,
                    hideProgressBar: false,
                    progressStyle: {
                        background: "rgb(255,168,212)",
                        background:
                            "linear-gradient(90deg, rgba(255,168,212,1) 0%, rgba(245,119,185,1) 38%, rgba(245,29,140,1) 100%)",
                        height: "5px",
                    },
                    style: {
                        fontFamily: "MN_Light",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "rgba(245,119,185,1)",
                    },
                });
            } else if (error.request) {
                toast.error(error.message, {
                    className: "error-message",
                    progressBar: true,
                    hideProgressBar: false,
                    progressStyle: {
                        background: "rgb(255,168,212)",
                        background:
                            "linear-gradient(90deg, rgba(255,168,212,1) 0%, rgba(245,119,185,1) 38%, rgba(245,29,140,1) 100%)",
                        height: "5px",
                    },
                    style: {
                        fontFamily: "MN_Light",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "rgba(245,119,185,1)",
                    },
                });
            } else {
                toast.error("An unexpected error occurred.", {
                    className: "error-message",
                    progressBar: true,
                    hideProgressBar: false,
                    progressStyle: {
                        background: "rgb(255,168,212)",
                        background:
                            "linear-gradient(90deg, rgba(255,168,212,1) 0%, rgba(245,119,185,1) 38%, rgba(245,29,140,1) 100%)",
                        height: "5px",
                    },
                    style: {
                        fontFamily: "MN_Light",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "rgba(245,119,185,1)",
                    },
                });
            }
            toast.error("Please Check", {
                className: "error-message",
                progressBar: true,
                hideProgressBar: false,
                progressStyle: {
                    background: "rgb(255,168,212)",
                    background:
                        "linear-gradient(90deg, rgba(255,168,212,1) 0%, rgba(245,119,185,1) 38%, rgba(245,29,140,1) 100%)",
                    height: "5px",
                },
                style: {
                    fontFamily: "MN_Light",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "rgba(245,119,185,1)",
                },
            });
        }
    };

    return (
        <div className="Vote_container">
            <div className="vote_Content">
                <div className="header_vote">{name}</div>
                <div className="choice1">
                    <div className="vote_header">
                        <div className="checkbox_container">
                            <input
                                type="checkbox"
                                onChange={() => handleChange(1)}
                                checked={selectedChoice === 1}
                            />
                            <span className="checkmark"></span>
                        </div>
                        <h1>{name1}</h1>
                    </div>
                    <img src={shirt1} alt="" />
                    <div className="vote_des">
                        <p>{description1}</p>
                    </div>
                </div>
                <div className="choice2">
                    <div className="vote_header">
                        <div className="checkbox_container">
                            <input
                                type="checkbox"
                                onChange={() => handleChange(2)}
                                checked={selectedChoice === 2}
                            />
                            <span className="checkmark"></span>
                        </div>
                        <h1>{name2}</h1>
                    </div>
                    <img src={shirt2} alt="" />
                    <div className="vote_des">
                        <p>{description2}</p>
                    </div>
                </div>
                <div className="choice3">
                    <div className="vote_header">
                        <div className="checkbox_container">
                            <input
                                type="checkbox"
                                onChange={() => handleChange(3)}
                                checked={selectedChoice === 3}
                            />
                            <span className="checkmark"></span>
                        </div>
                        <h1>{name3}</h1>
                    </div>
                </div>
                <div className="vote_btn">
                    {Success ? (
                        <Navigate to="/final_page" />
                    ) : (
                        <Link to="#" onClick={handleSubmit}>
                            Submit
                        </Link>
                    )}
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default Vote;
