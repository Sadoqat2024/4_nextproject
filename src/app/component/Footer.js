import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer_page">
      <div className="footer">
      <div className="footer_heading">
        <h1>ответим на любой вопрос</h1>
      </div>

      <div className="service_scroll">
        <PiDotOutlineFill />
        <PiDotOutlineFill />
        <PiDotOutlineFill />
        <PiDotOutlineFill />
      </div>

      <div className="footer_container">
        <div className="footer_btn">
          <button className="footer_btn1">Имя</button>
          <button className="footer_btn2">Телефон</button>
        </div>
        <div className="footer_social">
          <div className="footer_social2">
            <p>Вопрос по дизайну, тюнингу и др.</p>
          </div>
          <div className="footer_social3">
            <button className="footer_social1">
              {" "}
              <FaTelegram size={30} />
            </button>
            <button className="footer_social1">
              {" "}
              <FaYoutube size={30} />
            </button>
            <button className="footer_social1">
              {" "}
              <FaVk size={30} />
            </button>
          </div>
        </div>
        <div className="footer_save">
          <div>
            <button className="footer_save_btn">otprav</button>
          </div>
          <div className="footer_location">
            <p>
              {" "}
              <FaLocationDot className="loc" size={15} /> Eu faucibus et rutrum
              fringilla orci nunc
            </p>
            <p>
              {" "}
              <FaPhone className="loc" /> 8 (812) 123-45-67
            </p>
            <p>
              <IoMdMail className="loc" /> carpower@gmail.com
            </p>
          </div>
        </div>
      </div>

     
    </div>

     <div className="footer_link">
        <h1>
          2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae
          magna at tempus commodo.
        </h1>
        <div className="footer_links" id="footer_links">
          <p>HOME</p>
          <p>ABOUT</p>
          <p>SERVICE</p>
          <p>PRICE</p>
          <p>CLIENT</p>
            </div>
      </div>
    </div>
    
  );
};

export default Footer;
