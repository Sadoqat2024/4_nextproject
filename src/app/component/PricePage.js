import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import './service.css'
import './pricepage.css'

const PricePage = () => {
  return (
    <div>
      <div className="service_section">
        <div className="service_h1">
          <h1>Стоимость полной оклейки автомобиля</h1>
        </div>
        <div className="service_scroll">
          <PiDotOutlineFill />
          <PiDotOutlineFill />
          <PiDotOutlineFill />
          <PiDotOutlineFill />
        </div>

        <div className="price_table">
          <table>
            <thead>
              <tr>
                <th>Aвто / Материал</th>
                <th>Пленка Spectroll</th>
                <th>Пленка Hexis</th>
                <th>Пленка SunTek</th>
                <th>Пленка LLumar</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="head_table">1 класс (Mini cooper, Fiat 500)</td>
                <td>53000</td>
                <td>64000</td>
                <td>69000</td>
                <td>72000</td>
              </tr>
              <tr>
                <td className="head_table">2 класс (BMW 3, Mercedes)</td>
                <td>53000</td>
                <td>64000</td>
                <td>69000</td>
                <td>72000</td>
              </tr>
              <tr>
                <td className="head_table">3 класс (BMW 7, Mercedes S)</td>
                <td>53000</td>
                <td>64000</td>
                <td>69000</td>
                <td>72000</td>
              </tr>
              <tr>
                <td className="head_table">4 класс (BMW X3,X4, Mercedes)</td>
                <td>53000</td>
                <td>64000</td>
                <td>69000</td>
                <td>72000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
