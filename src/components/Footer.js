import React from "react";
import { static_images } from "../common/Images";


const { solaytic, kanba, lighting, ztos, goldline } = static_images;


export default function Footer() {
  




  return (
    <footer className="bg-light">
      <div className="container">
        <h4 className="footer-head f22 mb2">Compaies Who Trusted Us </h4>
        <div className="">
          <ul className="center flex flex-wrap">
            <li>
              <img className="" src={solaytic} alt="" />
            </li>
            <li>
              <img className="" src={kanba} alt="" />
            </li>
            <li>
              <img className="" src={lighting} alt="" />
            </li>
            <li>
              <img className="" src={ztos} alt="" />
            </li>
            <li>
              <img className="" src={kanba} alt="" />
            </li>
            <li>
              <img className="" src={ztos} alt="" />
            </li>
            <li>
              <img className="" src={lighting} alt="" />
            </li>
            <li>
              <img className="" src={goldline} alt="" />
            </li>
            <li>
              <img className="" src={solaytic} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
