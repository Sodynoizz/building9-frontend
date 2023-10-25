import { useState } from "react";
import "./assets/styles/LogRe_styles/Regis.css";
import "./assets/styles/main-styles/font.css";
import { HiArrowUturnLeft } from "react-icons/hi2";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const RegisURL = "https://building9-backend.vercel.app/api/auth/register";

let STID_Sin;

function Regis() {
    const [passwordType1, setPasswordType1] = useState("password");
    const [passwordType2, setPasswordType2] = useState("password");
    const [StudentID, setStudentID] = useState("");
    const [Prefix, setPrefix] = useState("");
    const [Name, setName] = useState("");
    const [Nickname, setNickname] = useState("");
    const [Room, setRoom] = useState("");
    const [Number, setNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [ConEmail, setConEmail] = useState("");
    const [Tel, setTel] = useState("");
    const [LineID, setLineID] = useState("");
    const [Instagram, setInstagram] = useState("");
    const [Facebook, setFacebook] = useState("");
    const [Password, setPassword] = useState("");
    const [ConPass, setConPass] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function ResetForm() {
        setStudentID("");
        setPassword("");
        setName("");
        setNickname("");
        setRoom("");
        setNumber("");
        setEmail("");
        setTel("");
        setLineID("");
        setInstagram("");
        setFacebook("");
        setPassword("");
        setConPass("");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let check = document.getElementById("Check");
        setErrorMessage("");
        if (Password == ConPass && Email == ConEmail && check.checked == true) {
            try {
                if (
                    Prefix === "" ||
                    Name === "" ||
                    Nickname == "" ||
                    StudentID === "" ||
                    Number === "" ||
                    Room === "" ||
                    Password === "" ||
                    ConPass === "" ||
                    Tel === "" ||
                    LineID === "" ||
                    Email === ""
                ) {
                    return toast.error("Please input all required fields", {
                        className: "error-message",
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
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "rgba(245,119,185,1)",
                        },
                    });
                }
                const response = await axios.post(RegisURL, {
                    studentPrefix: Prefix,
                    studentName: Name,
                    studentNickname: Nickname,
                    studentID: StudentID,
                    studentNumber: parseInt(Number),
                    studentRoom: parseInt(Room),
                    password: Password,
                    confirmpassword: ConPass,
                    Tel: Tel,
                    LineID: LineID,
                    instagram: Instagram,
                    facebook: Facebook,
                    email: Email,
                    environmentKey: import.meta.env.VITE_LOGRE,
                });
                ResetForm();
                setSuccess(true);
                STID_Sin = StudentID;
                console.log(response);
            } catch (error) {
                if (error.response) {
                    return toast.error(error.response.data, {
                        className: "error-message",
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
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "rgba(245,119,185,1)",
                        },
                    });
                } else if (error.request) {
                    return toast.error(error.message, {
                        className: "error-message",
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
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "rgba(245,119,185,1)",
                        },
                    });
                } else {
                    return toast.error("An unexpected error occurred.", {
                        className: "error-message",
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
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "rgba(245,119,185,1)",
                        },
                    });
                }
            }
        } else {
            if (Email !== ConEmail) {
                return toast.error("Email is not matching", {
                    className: "error-message",
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
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "rgba(245,119,185,1)",
                    },
                });
            } else if (Password !== ConPass) {
                return toast.error("Password is not matching", {
                    className: "error-message",
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
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "rgba(245,119,185,1)",
                    },
                });
            } else {
                return toast.error("Please Check", {
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
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "rgba(245,119,185,1)",
                    },
                });
            }
        }
    };
    const handleFormSubmit = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };
    const togglePassword1 = () => {
        if (passwordType1 === "password") {
            setPasswordType1("text");
            return;
        }
        setPasswordType1("password");
    };
    const togglePassword2 = () => {
        if (passwordType2 === "password") {
            setPasswordType2("text");
            return;
        }
        setPasswordType2("password");
    };
    return (
        <div className="AllContent">
            <div className="header">
                <h1>Register</h1>
            </div>
            <form action="">
                <input
                    type="text"
                    value={StudentID}
                    onChange={(event) => setStudentID(event.target.value)}
                    placeholder="เลขประจำตัวนักเรียน *"
                    required
                />
                <div className="line1">
                    <select
                        name=""
                        value={Prefix}
                        onChange={(event) => setPrefix(event.target.value)}
                        id="Prefix"
                    >
                        <option value="">คำนำหน้า *</option>
                        <option value="เด็กหญิง">เด็กหญิง</option>
                        <option value="เด็กชาย">เด็กชาย</option>
                        <option value="นาย">นาย</option>
                        <option value="นาง">นางสาว</option>
                    </select>
                    <input
                        type="text"
                        value={Name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="ชื่อ-นามสกุล *"
                    />
                </div>
                <input
                    type="text"
                    value={Nickname}
                    onChange={(event) => setNickname(event.target.value)}
                    placeholder="ชื่อเล่น *"
                />
                <div className="line">
                    <input
                        type="text"
                        value={Room}
                        onChange={(event) => setRoom(event.target.value)}
                        placeholder="ห้อง *"
                    />
                    <input
                        type="text"
                        value={Number}
                        onChange={(event) => setNumber(event.target.value)}
                        placeholder="เลขที่ *"
                    />
                </div>
                <input
                    type="email"
                    placeholder="Email ( จำเป็นต้องใช้อีเมลโรงเรียน ) *"
                    value={Email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="ยืนยัน Email *"
                    value={ConEmail}
                    onChange={(event) => setConEmail(event.target.value)}
                />
                <input
                    type="email"
                    value={Tel}
                    onChange={(event) => setTel(event.target.value)}
                    placeholder="เบอร์โทรศัพท์ *"
                />
                <input
                    type="text"
                    value={LineID}
                    onChange={(event) => setLineID(event.target.value)}
                    placeholder="LINE ID *"
                />
                <div className="line">
                    <input
                        type="text"
                        value={Instagram}
                        onChange={(event) => setInstagram(event.target.value)}
                        placeholder="Instagram"
                    />
                    <input
                        type="text"
                        value={Facebook}
                        onChange={(event) => setFacebook(event.target.value)}
                        placeholder="Facebook"
                    />
                </div>
                <div className="passW">
                    <input
                        type={passwordType1}
                        value={Password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password *"
                    />
                    <a onClick={togglePassword1} className="Eye">
                        {passwordType1 === "password" ? (
                            <AiFillEye color="#f51d8cff" size={24} />
                        ) : (
                            <AiFillEyeInvisible color="#f51d8cff" size={24} />
                        )}
                    </a>
                </div>
                <div className="passW">
                    <input
                        type={passwordType2}
                        value={ConPass}
                        onChange={(event) => setConPass(event.target.value)}
                        placeholder="ยืนยัน Password *"
                        onKeyPress={handleFormSubmit}
                    />
                    <a onClick={togglePassword2} className="Eye">
                        {passwordType2 === "password" ? (
                            <AiFillEye color="#f51d8cff" size={24} />
                        ) : (
                            <AiFillEyeInvisible color="#f51d8cff" size={24} />
                        )}
                    </a>
                </div>
            </form>
            <div className="Submit_btn">
                <div className="Accept">
                    <input type="checkbox" name="" id="Check" />
                    <p>
                        ยอมรับ
                        <a href="#">
                            ข้อกำหนด เงื่อนไขการใช้งานและความเป็นส่วนตัว
                        </a>
                    </p>
                </div>
                {success ? (
                    <Navigate to="/" />
                ) : (
                    <input type="Submit" onClick={handleSubmit} />
                )}
                <Link to="/Login" className="Return">
                    ย้อนกลับ
                    <HiArrowUturnLeft />
                </Link>
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
        </div>
    );
}
export default Regis;
export { STID_Sin };
