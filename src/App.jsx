import { useState, useEffect } from "react";
import logo from "./assets/img/logo.png";
import User from "./assets/img/User.png";
import Calender from "./assets/img/calender.jpg";
import Regis from "./assets/img/Regis.png";
import Announce from "./assets/img/announce.png";
import Report from "./assets/img/report.png";
import Table from "./assets/img/table.png";
import BumpCar from "./assets/img/footer.png";
import Bowl from "./assets/img/bowl.png";
import White from "./assets/img/white.jpg";
import Home1 from "./assets/img/home1.jpg";
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
import "./assets/styles/main-styles/App.css";
import "./assets/styles/main-styles/activity.css";
import "./assets/styles/main-styles/font.css";
import "./assets/styles/main-styles/home.css";
import "./assets/styles/main-styles/navbar.css";
import "./assets/styles/main-styles/public.css";
import "./assets/styles/main-styles/road.css";
import { FaChevronDown } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { Spin as Hamburger } from "hamburger-react";
import { StudentID } from "./Login";
import { STID_Sin } from "./Regis";
const UserURL = "https://building9-backend.vercel.app/api/auth/profile";
import axios from "axios";
import LoadingPage from "./loading.jsx";
import { reSTID } from "./Reset";

function App() {
    let [STDID, setSTDID] = useState(
        localStorage.getItem("STDID") || StudentID || STID_Sin || reSTID || ""
    );
    const [user, setUser] = useState("");
    const [STNumber, setSTNumber] = useState("");
    const [STRoom, setSTRoom] = useState("");
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    let name;
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
    const response = axios.post(UserURL, {
        studentID: StudentID,
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

    function getHrefForItem(item) {
        switch (item) {
            case "รายงานการประชุม":
                return "/ComingSoon";
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
            case "กีฬา":
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
                    <div className={isOpen ? "Hamburger actives" : "Hamburger"}>
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            color="#fc77bc"
                            duration={0.8}
                            onClick={showSidebar}
                        />
                    </div>
                    <nav id="nav" className={isOpen ? "nav active" : "nav"}>
                        <div className="Left">
                            <div className="logo">
                                <a href="#Home">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                            <ul className="nav-lists">
                                <li>
                                    <a href="#Home">
                                        <p>หน้าแรก</p>
                                    </a>
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
                                    <Link to="/Prevote">VOTE</Link>
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
                                        <a href="#" className="DropDown-item">
                                            ดาวโหลดเกียรติบัตร
                                        </a>
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
                    </nav>
                    <div className="page">
                        <div className="home" id="Home">
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                autoplay={{
                                    delay: 3000,
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
                                    <img src={Home1} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="background">
                            <div className="public">
                                <h1>ข่าวประชาสัมพันธ์</h1>
                                <div className="Catalog">
                                    <div className="item">
                                        {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                                    </div>
                                    <div className="item">
                                        {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                                    </div>
                                    <div className="item">
                                        {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                                    </div>
                                    <div className="item">
                                        {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                                    </div>
                                    <div className="item">
                                        {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                                    </div>
                                    <div className="item">
                                        {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                                    </div>
                                </div>
                                <button>
                                    <p>อ่านทั้งหมด</p>
                                </button>
                            </div>
                            <div className="activity">
                                <h1>กิจกรรม</h1>
                                <div className="Catalog">
                                    <div className="item">
                                        {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                                    </div>
                                    <div className="item">
                                        {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                                    </div>
                                    <div className="item">
                                        {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                                    </div>
                                </div>
                                <button>
                                    <p>ดูทั้งหมด</p>
                                </button>
                            </div>
                            <div className="road">
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
                            </div>
                        </div>
                        <footer>
                            <img src={BumpCar} alt="" />
                            <div className="footer_text">
                                <h2>
                                    คณะกรรมการตึก ๙ โรงเรียนเตรียมอุดมศึกษา{" "}
                                    <br />
                                    277 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน <br />
                                    กรุงเทพมหานคร 10330
                                </h2>
                                <h3>
                                    Contact us : <br />
                                    <div className="email">
                                        <img src="" alt="" />
                                        <MdEmail color="var(--persian-pink)" />{" "}
                                        <p>tubuilding9.sc@gmail.com</p>
                                    </div>
                                    <div className="email">
                                        <img src="" alt="" />
                                        <AiFillInstagram color="var(--persian-pink)" />{" "}
                                        <p>building9.tu</p>
                                    </div>
                                </h3>
                            </div>
                            <div className="Condi">
                                <Link to="/ComingSoon">
                                    ข้อกำหนด
                                    เงื่อนไขการใช้งานและนโยบายคุ้มครองข้อมูลส่วนบุลคล
                                </Link>
                            </div>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
