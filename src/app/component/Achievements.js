import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { MdOutlineCarRental } from "react-icons/md";
import './achieve.css'

const Achievements = () => {
  return (
    <div className="black-background">
      <div className="achieve_container">
        <div className="achieve_content">
          <h1>Hаши достижения от кубка россии до чемпионатов мира</h1>
          <div className="scroll">
            <PiDotOutlineFill />
            <PiDotOutlineFill />
            <PiDotOutlineFill />
            <PiDotOutlineFill />
          </div>
          <p>
            {" "}
            With a rich legacy spanning 25 years, our commitment to excellence
            in car servicing is unwavering. Our seasoned team brings a wealth of
            experience to ensure your
          </p>
        </div>
        <div className="table_content">
          <div className="table_content1">
            <div className="table_contents">
              <h1>#1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="table_contents">
              <h1>#6</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="table_contents">
              <h1>#2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="table_contents">
              <h1>#1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
          </div>
          <div className="table_content2">
            <div className="table_contents">
              <h1>#4</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="table_contents">
              <h1>#3</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="table_contents">
              <h1>#1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
            <div className="table_contents">
              <h1>
                <GiTrophyCup />
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dui{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll_img3">
        <div className="icon">
          <button className="icon_btn">
            <HiChevronLeft size={40} />
          </button>
        </div>
        <div className="imgs">
          <img
            src="https://th.bing.com/th/id/OIP.BqQK3_kMainSuPu4rRmR5wAAAA?rs=1&pid=ImgDetMain"
            alt="img1"
          />
          <p className="scroll_img_p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            sapiente impedit dignissimos magnam quo
          </p>
        </div>
        <div className="imgs">
          <img
            src="https://i.pinimg.com/originals/13/ed/9f/13ed9fb9838de0c68d3b350bc628466a.jpg"
            alt="img2"
          />
          <p className="scroll_img_p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            sapiente impedit dignissimos magnam quo
          </p>
        </div>
        <div className="imgs">
          <img
            src="https://th.bing.com/th/id/OIP.HihZ_TklVdlbWaty1svpzAAAAA?rs=1&pid=ImgDetMain"
            alt="img3"
          />
          <p className="scroll_img_p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            sapiente impedit dignissimos magnam quo
          </p>
        </div>
        <div className="icon">
          <button className="icon_btn">
            <HiChevronRight size={40} />
          </button>
        </div>
      </div>

      <div className="advantages">
        <div className="content">
          <div className="contents">
            <div className="content_heading">
              <button className="btn_car" >
                <MdOutlineCarRental size={40}/>
              </button>
              <h1>материалы от лучших компаний</h1>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
              rutrum est, molestie proin tristique duis sed. Morbi suspendisse
              amet nisl vestibulum risus. Quis pretium
            </p>
            <div className="scroll">
              <PiDotOutlineFill />
              <PiDotOutlineFill />
              <PiDotOutlineFill />
              <PiDotOutlineFill />
            </div>
          </div>

          <div className="contents">
            <div className="content_heading">
              <button className="btn_car">
                <MdOutlineCarRental size={40} />
              </button>
              <h1>Опытные мастера</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
              rutrum est, molestie proin tristique duis sed. Morbi suspend.
            </p>
            <div className="scroll">
              <PiDotOutlineFill />
              <PiDotOutlineFill />
              <PiDotOutlineFill />
              <PiDotOutlineFill />
            </div>
          </div>
          <div className="contents">
            <div className="content_heading">
              <button className="btn_car">
                <MdOutlineCarRental size={40} />
              </button>
              <h1>Гарантия на все виды работы</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="img_content">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium,
              rutrum est, molestie proin tristique duis sed.
            </p>
            <button className="icon_btn">
              <HiChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
