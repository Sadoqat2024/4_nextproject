import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import './price.css'

const PriceList = () => {
  return (
    <div>
      <section className="service_section">
        <div className="service_h1">
          <h1>Преимущества защитной антигравийной пленки</h1>
        </div>
        <div className="service_scroll">
          <PiDotOutlineFill />
          <PiDotOutlineFill />
          <PiDotOutlineFill />
          <PiDotOutlineFill />
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
    </div>
  );
};

export default PriceList;
