import { useState, useEffect, useRef } from "react";
import logo from "./assets/img/logo.png";
import User from "./assets/img/User.png";
import Calender from "./assets/img/calender.jpg";
import Regis from "./assets/img/Regis.png";
import Announce from "./assets/img/announce.png";
import Report from "./assets/img/report.png";
import Table from "./assets/img/table.png";
import BumpCar from "./assets/img/footer.png";
import White from "./assets/img/white.jpg";
import Home1 from "./assets/img/home1.jpg";
import Home3 from "./assets/img/home3.png";
import {
    Navigation,
    Pagination,
    Autoplay,
    Scrollbar,
    A11y,
} from "swiper/modules";
import { Link, Navigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocalStorage } from "usehooks-ts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import "./assets/styles/main-styles/App.scss";
import "./assets/styles/main-styles/activity.scss";
import "./assets/styles/main-styles/font.scss";
import "./assets/styles/main-styles/home.scss";
import "./assets/styles/main-styles/navbar.scss";
import "./assets/styles/main-styles/public.scss";
import "./assets/styles/main-styles/road.scss";
import { FaChevronDown } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { Spin as Hamburger } from "hamburger-react";
import { StudentID } from "./Login";
import { STID_Sin } from "./Regis";
import axios from "axios";
import LoadingPage from "./loading.jsx";
import { reSTID } from "./Reset";
import { motion } from "framer-motion";
import Snowfall from 'react-snowfall'

const UserURL = "https://building9-backend.vercel.app/api/auth/profile";
const VoteInfoURL = `https://building9-backend.vercel.app/api/vote/getpollinfo/${
    import.meta.env.VITE_LOGRE
}`;

function App() {
    let [STDID, setSTDID] = useState(
        localStorage.getItem("STDID") || StudentID || STID_Sin || reSTID || ""
    );
    const [user, setUser] = useState("");
    const [STNumber, setSTNumber] = useState("");
    const [STRoom, setSTRoom] = useState("");
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const [Vote, setVote] = useState("");
    const [Alrv, setAlrv] = useState(false);
    const [Alrvf, setAlrvf] = useState(false);
    let name;
    let STDIDN = parseInt(STDID);
    useEffect(() => {
        localStorage.setItem("STDID", STDID);
    });
    useEffect(() => {
        const Start = async (e) => {
            try {
                setLoading(true);
                const response = await axios.post(UserURL, {
                    studentID: STDID,
                    environmentKey: import.meta.env.VITE_LOGRE,
                });
                setCheck(true);
                //name = response?.data.studentName;
                //name = name.split(" ");
                name = response?.data.studentNickname;
                setUser(name);
                setSTNumber(response?.data.studentNumber);
                setSTRoom(response?.data.studentRoom);
                setLoading(false);
            } catch (error) {
                setLoading(false);
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
    useEffect(() => {
        axios.get(VoteInfoURL).then((response) => {
            setVote(response?.data.participants);
        });
    }, []);
    useEffect(() => {
        if (Vote.includes(STDIDN)) {
            setAlrv(true);
        }
        if (STDID === "") {
            setAlrvf(true);
        }
    }, [Vote]);

    const response = axios.post(UserURL, {
        studentID: STDID,
        environmentKey: import.meta.env.VITE_LOGRE,
    });
    const [dropdowns, setDropdowns] = useState([
        {
            id: "DC1",
            title: "รายงานกรรมการตึก",
            items: [
                "รายงานการประชุม",
                "สรุปบัญชี",
                "ปฏิทินตึก",
                "นโยบาย checklist",
            ],
        },
        {
            id: "DC2",
            title: "ประชาสัมพันธ์",
            items: ["ข่าว", "Intercom"],
        },
        {
            id: "DC3",
            title: "วิชาการ",
            items: ["สรุป", "Quiz"],
        },
        {
            id: "DC4",
            title: "สวัสดิการ",
            items: ["อุปกรณ์กีฬา", "ยา", "Lost & Found"],
        },
        {
            id: "DC5",
            title: "ลงทะเบียน",
            items: [
                "กีฬาสี",
                "งานสืบสานฯ",
                "คริสต์มาส",
                "ประกาศผล/ยืนยันสิทธิ์",
            ],
        },
        {
            id: "DC6",
            title: "SHOP",
            items: ["SHOP", "คำสั่งซื้อ"],
        },
        {
            id: "DC7",
            title: "Gallery",
            items: ["2566"],
        },
        {
            id: "DC8",
            title: "เกี่ยวกับตึก ๙",
            items: [
                "ประวัติ",
                "ทำเนียบครูหัวหน้าตึก",
                "ครูและบุคลากร",
                "คณะกรรมการตึก",
            ],
        },
    ]);
    const [News, setNews] = useState([
        {
            id: "NC1",
            image: Home1,
            title: "Nano",
            items: "",
        },
        {
            id: "NC2",
            image: "",
            title: "",
            items: "",
        },
        {
            id: "NC3",
            image: "",
            title: "",
            items: "",
        },
        {
            id: "NC4",
            image: "",
            title: "",
            items: "",
        },
        {
            id: "NC5",
            image: "",
            title: "",
            items: "",
        },
        {
            id: "NC6",
            image: "",
            title: "",
            items: "",
        },
    ]);
    const [Act, setAct] = useState([
        {
            id: "AC1",
            image: Home1,
            title: "Nano",
            items: "",
        },
        {
            id: "AC2",
            image: "",
            title: "",
            items: "",
        },
        {
            id: "AC3",
            image: "",
            title: "",
            items: "",
        },
    ]);

    function getHrefForItem(item) {
        switch (item) {
            case "รายงานการประชุม":
                return "/Report_page";
            case "สรุปบัญชี":
                return "/ComingSoon";
            case "ปฏิทินตึก":
                return "/ComingSoon";
            case "นโยบาย checklist":
                return "/ComingSoon";
            case "ข่าว":
                return "/ComingSoon";
            case "Intercom":
                return "/ComingSoon";
            case "สรุป":
                return "/ComingSoon";
            case "Quiz":
                return "/ComingSoon";
            case "อุปกรณ์กีฬา":
                return "/ComingSoon";
            case "ยา":
                return "/ComingSoon";
            case "Lost & Found":
                return "/ComingSoon";
            case "กีฬาสี":
                return "/ComingSoon";
            case "งานสืบสานฯ":
                return "/ComingSoon";
            case "คริสต์มาส":
                return "/ComingSoon";
            case "ประกาศผล/ยืนยันสิทธิ์":
                return "/ComingSoon";
            case "SHOP":
                return "/ComingSoon";
            case "คำสั่งซื้อ":
                return "/ComingSoon";
            case "2566":
                return "/ComingSoon";
            case "ประวัติ":
                return "/ComingSoon";
            case "ทำเนียบครูหัวหน้าตึก":
                return "/ComingSoon";
            case "ครูและบุคลากร":
                return "/ComingSoon";
            case "คณะกรรมการตึก":
                return "/ComingSoon";
            default:
                return "/";
        }
    }

    function Dropdown9() {
        let Dropdown = document.getElementById("DC9");

        if (Dropdown.dataset.shown === "false") {
            Dropdown.style.display = "block";
            Dropdown.dataset.shown = "true";
        } else {
            Dropdown.style.display = "none";
            Dropdown.dataset.shown = "false";
        }
    }
    const [isOpen, setOpen] = useState(false);
    const [previosID, setPreviousID] = useState(0);
    const [select, setSelect] = useState(false);

    const showSidebar = () => setOpen(!isOpen);
    function Dropdownww(id) {
        setSelect(!select);
        const dropdown = dropdowns.find((dropdown) => dropdown.id === id);
        const Dropdowncontent = document.getElementById(dropdown.id);
        if (previosID !== id) {
            setPreviousID(id);
            const Previousdropdown = dropdowns.find(
                (dropdown) => dropdown.id === previosID
            );
            const PreviousDropdownContent = document.getElementById(
                Previousdropdown.id
            );
            PreviousDropdownContent.classList.add("hidden");
            Dropdowncontent.classList.remove("hidden");
        } else {
            if (select) {
                Dropdowncontent.classList.remove("hidden");
            } else {
                Dropdowncontent.classList.add("hidden");
            }
        }
    }
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const logout = () => {
        localStorage.setItem("STDID", "");
        window.location.reload();
    };

    return (
        <div className="main-content">
            {loading ? (
                <LoadingPage />
            ) : (
                <div className="content">
                    <Snowfall/>
                    <div className={isOpen ? "Hamburger actives" : "Hamburger"}>
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            color="#fc77bc"
                            duration={0.8}
                            onClick={showSidebar}
                        />
                    </div>
                    <motion.nav
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                        }}
                        id="nav"
                        className={isOpen ? "nav active" : "nav"}
                    >
                        <div className="Left">
                            <div className="logo">
                                <Link>
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <ul className="nav-lists">
                                <li>
                                    <Link
                                        onClick={() => {
                                            window.location.reload();
                                        }}
                                    >
                                        <p>หน้าแรก</p>
                                    </Link>
                                </li>
                                {dropdowns.map((dropdown) => (
                                    <li key={dropdown.id} className="DropDown">
                                        <button
                                            className="Dropbtn"
                                            id="Dropbtn"
                                            onClick={() =>
                                                Dropdownww(dropdown.id)
                                            }
                                        >
                                            <p>{dropdown.title}</p>
                                            <FaChevronDown color="white" />
                                        </button>
                                        <div
                                            className="Dropdown-content hidden"
                                            data-shown={dropdown.shown}
                                            id={dropdown.id}
                                        >
                                            {dropdown.items.map((item) => (
                                                <Link
                                                    to={getHrefForItem(item)}
                                                    className="DropDown-item"
                                                    key={item}
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                                <li>
                                    {Alrv ? (
                                        <Link to="/final_page">VOTE</Link>
                                    ) : Alrvf ? (
                                        <Link to="/Login">VOTE</Link>
                                    ) : (
                                        <Link to="/Prevote">VOTE</Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <ul className="User">
                            {check ? (
                                <li className="DropDown">
                                    <button
                                        className="Dropbtn"
                                        onClick={Dropdown9}
                                    >
                                        <div className="text">
                                            <p>{user}</p>
                                            <p>
                                                {STNumber}/{STRoom}
                                            </p>
                                        </div>
                                        <img src={User} alt="" />
                                        <FaChevronDown color="white" />
                                    </button>
                                    <div
                                        className="Dropdown-content"
                                        data-shown="false"
                                        id="DC9"
                                        style={{ display: "none" }}
                                    >
                                        <Link
                                            to="/User_info"
                                            className="DropDown-item"
                                        >
                                            จัดการบัญชี
                                        </Link>
                                        <a
                                            href="#"
                                            onClick={logout}
                                            className="DropDown-item"
                                        >
                                            Log out
                                        </a>
                                        <Link to="/ComingSoon" className="DropDown-item">
                                            ดาวโหลดเกียรติบัตร
                                        </Link>
                                    </div>
                                </li>
                            ) : (
                                <li className="">
                                    <Link to="/Login">
                                        Login <CiLogin />
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </motion.nav>
                    <div className="page">
                        <div className="home" id="Home">
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                    clickable: true
                                }}
                                modules={[Pagination, Autoplay]}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={0}
                                slidesPerView={1}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={Home1} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Home3} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                            }}
                            className="public"
                        >
                            <h1>ข่าวประชาสัมพันธ์</h1>
                            <div className="Catalog">
                                {News.map((news) => (
                                    <div id={news.id} className="item">
                                        {/* <img src={news.image} alt="" />
                                        <div className="content">
                                            <div className="head">
                                                {news.title}
                                            </div>
                                            <p>{news.items}</p>
                                            <a href="">Read more</a>
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                }}
                            >
                                <p>อ่านทั้งหมด</p>
                            </motion.button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                            }}
                            className="activity"
                        >
                            <h1>กิจกรรม</h1>
                            <div className="Catalog">
                                {Act.map((act) => (
                                    <div id={act.id} className="item">
                                        {/* <img src={act.image} alt="" />
                                        <div className="content">
                                            <div className="head">
                                                {act.title}
                                            </div>
                                            <p>{act.items}</p>
                                            <a href="">Read more</a>
                                        </div> */}
                                    </div>
                                ))}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                }}
                            >
                                <p>ดูทั้งหมด</p>
                            </motion.button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                            }}
                            className="road"
                        >
                            <div className="Catalog">
                                <div className="item">
                                    <Link to="/Information">
                                        <img src={User} alt="" />
                                    </Link>
                                    <p>สารสนเทศ</p>
                                </div>
                                <div className="item">
                                    <a href="https://schedule.tucm.cc/">
                                        <img src={Table} alt="" />
                                    </a>
                                    <p>ตารางเรียน</p>
                                </div>
                                <div className="item">
                                    <Link to="/ComingSoon">
                                        <img src={Calender} alt="" />
                                    </Link>
                                    <p>ปฏิทิน</p>
                                </div>
                                <div className="item">
                                    <Link to="/ComingSoon">
                                        <img src={Regis} alt="" />
                                    </Link>
                                    <p>ลงทะเบียน</p>
                                </div>
                                <div className="item">
                                    <Link to="/ComingSoon">
                                        <img src={Announce} alt="" />
                                    </Link>
                                    <p>ประกาศ</p>
                                </div>
                                <div className="item">
                                    <Link to="/ComingSoon">
                                        <img src={Report} alt="" />
                                    </Link>
                                    <p>ระบบร้องเรียน</p>
                                </div>
                            </div>
                        </motion.div>
                        <footer>
                            <img src={BumpCar} alt="" />
                            <div className="footer_text">
                                <motion.h2
                                    initial={{ opacity: 0, x: -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5,
                                    }}
                                >
                                    คณะกรรมการตึก ๙ โรงเรียนเตรียมอุดมศึกษา{" "}
                                    <br />
                                    277 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน <br />
                                    กรุงเทพมหานคร 10330
                                </motion.h2>
                                <motion.h3
                                    initial={{ opacity: 0, x: 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5,
                                    }}
                                >
                                    Contact us : <br />
                                    <div className="email">
                                        <MdEmail color="var(--persian-pink)" />{" "}
                                        <a href="mailto:tubuilding9.sc@gmail.com">
                                            tubuilding9.sc@gmail.com
                                        </a>
                                    </div>
                                    <div className="email">
                                        <AiFillInstagram color="var(--persian-pink)" />{" "}
                                        <a href="https://www.instagram.com/building9.tu/">
                                            building9.tu
                                        </a>
                                    </div>
                                </motion.h3>
                            </div>
                            <div className="Condi">
                                <Link to="/ComingSoon">
                                    ข้อกำหนด
                                    เงื่อนไขการใช้งานและนโยบายคุ้มครองข้อมูลส่วนบุลคล
                                </Link>
                                <p>
                                    Copyright © 2023 Triam udom Suksa Building ๙
                                    Student Committee . All rights reserved.
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
