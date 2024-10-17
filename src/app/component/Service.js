import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { MdOutlineCarRental } from "react-icons/md";
import './service.css'
import './achieve.css'

const Service = () => {
  return (
    <main>
      <section className="service_section">
        <div className="service_h1">
          <h1>Наши услуги</h1>
        </div>
        <div className="service_scroll">
          <PiDotOutlineFill />
          <PiDotOutlineFill />
          <PiDotOutlineFill />
          <PiDotOutlineFill />
        </div>
        <div className="service_btn">
          <button className="service_btn1">Оклейка</button>
          <button className="service_btn2">Детейлинг</button>
        </div>
        <div className="service_4containers">
          <div className=" service_container">
            <div className="service_img">
              <img
                src="https://vaz2106-remont.ru/wp-content/uploads/2020/08/fol8.jpg"
                alt="car"
              />
            </div>
            <div className="service_text">
              <h1>Защитные пленки</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, rutrum est, molestie proin tristique duis sed.
              </p>
              <button className="service_btn_text">Подробнее</button>
            </div>
          </div>
          <div className=" service_container">
            <div className="service_img">
              <img
                src="https://th.bing.com/th/id/R.3e32ef7fba2dab32e08fe612d59d903d?rik=wsBbcMzQFuvNeQ&pid=ImgRaw&r=0"
                alt="car"
              />
            </div>
            <div className="service_text">
              <h1>Цветные пленки</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, rutrum est, molestie proin tristique duis sed.
              </p>
              <button className="service_btn_text">Подробнее</button>
            </div>
          </div>
          <div className=" service_container">
            <div className="service_img">
              <img
                src="https://img.best73.com/20211217/16397141529m2NS4.jpg"
                alt="car"
              />
            </div>
            <div className="service_text">
              <h1>Дизайн</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, rutrum est, molestie proin tristique duis sed.
              </p>
              <button className="service_btn_text">Подробнее</button>
            </div>
          </div>
          <div className=" service_container">
            <div className="service_img">
              <img
                src="https://th.bing.com/th/id/OIP.L7-4oGaehfFGtUUgtVaA8gHaFj?w=1024&h=768&rs=1&pid=ImgDetMain"
                alt="car"
              />
            </div>
            <div className="service_text">
              <h1>Оклейка салона</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, rutrum est, molestie proin tristique duis sed.
              </p>
              <button className="service_btn_text">Подробнее</button>
            </div>
          </div>
        </div>
      </section>
      <section className="service_section">
        <div className="service_advantages">

                  <div className="service_img_content">
            <div>
              <img
                src="https://th.bing.com/th/id/R.3da679f649d6b8ec599ed6387420efbb?rik=ldblViIqP7WisA&pid=ImgRaw&r=0"
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

          <div className="service_content">
            <div className="contents">
              <div className="content_heading">
                <button className="btn_car">
                  <MdOutlineCarRental size={40} />
                </button>
                <h1>100% полироль axem</h1>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, rutrum est, molestie proin tristique duis sed. Morbi
                suspendisse amet nisl vestibulum risus. Quis pretium
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
                <h1>выполняем работу четко по тз</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, rutrum est, molestie proin tristique duis sed. Morbi
                suspend.
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
                <h1>у нас лучшие мастера</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Service;
