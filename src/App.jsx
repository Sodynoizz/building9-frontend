import { useState } from 'react'
import reactLogo from './assets/react.svg'
import white from './assets/white.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  return (
    <div className='main-content'>
      <nav>

      </nav>
      <div className="page">
        <div className="home">
          
        </div>
        <div className="public">
          <h1>ข่าวประชาสัมพันธ์</h1>
          <div className="Catalog">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <button><p>อ่านทั้งหมด</p></button>
        </div>
        <div className="activity">
          <h1>กิจกรรม</h1>
          <div className="Catalog">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <button><p>ดูทั้งหมด</p></button>
        </div>
        <div className="road">
          <div className="Catalog">
              <div className="item"><a href=""><img src={white} alt="" /></a><p>สารสนเทศ</p></div>
              <div className="item"><a href="https://schedule.tucm.cc/"><img src={white} alt="" /></a><p>ตารางเรียน</p></div>
              <div className="item"><a href=""><img src={white} alt="" /></a><p>ปฏิทิน</p></div>
              <div className="item"><a href=""><img src={white} alt="" /></a><p>ลงทะเบียน</p></div>
              <div className="item"><a href=""><img src={white} alt="" /></a><p>ประกาศ</p></div>
              <div className="item"><a href=""><img src={white} alt="" /></a><p>ระบบร้องเรียน</p></div>
            </div>
        </div>
        <footer></footer>
      </div>
    </div>
  )
}

export default App
