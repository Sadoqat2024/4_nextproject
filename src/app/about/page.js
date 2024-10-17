import Link from "next/link";
import { FaCarOn } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { PiDotOutlineFill } from "react-icons/pi";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { MdOutlineCarRental } from "react-icons/md";
import './about.css'

const About = () => {
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
            <h1>Оклейка автомобиля защитными пленками</h1>
            <div className="scroll">
              <PiDotOutlineFill />
              <PiDotOutlineFill />
              <PiDotOutlineFill />
              <PiDotOutlineFill />
            </div>
            <p>
              {" "}
              With a rich legacy spanning 25 years, our commitment to excellence
              in car servicing is unwavering.
            </p>

            <button className="btn">Цены</button>
          </div>
        </div>
      </header>

      <div>
        <div className="advantages">
          <div className="about_content">
            <div className="contents">
              <div className="content_heading">
                <h1>
                  Полиуретановая пленка единственная надежная защита автомобиля
                  от всех внешних воздействий
                </h1>
              </div>
              <div className="scroll">
                <PiDotOutlineFill />
                <PiDotOutlineFill />
                <PiDotOutlineFill />
                <PiDotOutlineFill />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, rutrum est, molestie proin tristique duis sed. Morbi
                suspendisse amet nisl vestibulum risus. Quis pretium
              </p>
            </div>

            <div className="car_logos">
              <img
                src="https://th.bing.com/th/id/OIP.2bYO1r2Vjn0AofUIYxZN3gHaFj?rs=1&pid=ImgDetMain"
                alt="logo"
              />
              <img
                src="https://mottel-hokkaidou.net/img/optical_line_img/tosys_hikari_logo.png"
                alt="logo"
              />
              <img
                src="https://th.bing.com/th/id/OIP.RSILG62Eb3zgyx8pJjvEEgHaHa?rs=1&pid=ImgDetMain"
                alt="logo"
              />
              <img
                src="https://th.bing.com/th/id/R.fb4f91cee2f282976fddeb9ae750578c?rik=7BMx1uXy8mJe3w&pid=ImgRaw&r=0"
                alt="logo"
              />
            </div>
            <div className="contents"></div>
          </div>

          <div className="about_img_content">
            <div>
              <img
                src="https://images.pexels.com/photos/14445437/pexels-photo-14445437.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"
                alt="img1"
              />
            </div>
            <div className="img_content_icons_p">
              <button className="icon_btn">
                <HiChevronLeft size={40} />
              </button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, rutrum est, molestie proin tristique duis sed.
              </p>
              <button className="icon_btn">
                <HiChevronRight size={40} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
