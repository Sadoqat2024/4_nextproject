'use client'

import React from "react";
import Link from "next/link";
import { FaCarOn } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { PiDotOutlineFill } from "react-icons/pi";


const Home = () => {
  

 
  return (
    <main>
      <header className="header">
        <nav>
          <div className="nav_bar">
            <div className="nav_logo">
              <Link href="/">
                <FaCarOn />
              </Link>
            </div>
           

            <ul className="nav_links" id="nav_links">
              <li>
                <Link href="/home">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/service">SERVICE</Link>
              </li>
              <li>
                <Link href="/price">PRICE</Link>
              </li>
              <li>
                <Link href="/client">CLIENT</Link>
              </li>
            </ul>
            <div className="nav_menu_btn" id="menu_btn">
              <CiMenuFries />
            </div>
          </div>
        </nav>

        <div className="section_container">
          <div className="header_content">
            <h1>Car Musc</h1>
            <div className="scroll">
              <PiDotOutlineFill />
              <PiDotOutlineFill />
              <PiDotOutlineFill />
              <PiDotOutlineFill />
              </div>
              <p>  With a rich legacy spanning 25 years, our commitment to excellence in
          car servicing is unwavering. Our seasoned team brings a wealth of
          experience to ensure your 
          </p>

          <button className="btn">Our Service</button>
          </div>  
        </div>

        <div className="container3">
          <div className="adress_container">
            <h2 className="car_h2">Adress:</h2>
            <p className="car_p1">Uzbekistan, Tashkent, Street Amir Temur 1004, </p>
          </div>
          <div className="phone_container">
            <h2 className="car_h2">Our Phone:</h2>
            <p className="car_p1">+ 998 78 145 00 01</p>
            <p className="car_p1">+ 998 90 234 00 01</p>
          </div>
          <div className="work_time_container">
            <h2 className="car_h2">Work Time</h2>
            <p className="car_p1">Mn-Fr: 10.00 - 20.00</p>
            <p className="car_p1">St-Sn: 12.00 - 18.00</p>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Home;
