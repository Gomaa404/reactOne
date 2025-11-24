import React, { useState } from "react";
import style from "./style.module.css";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import { FaPlus } from "react-icons/fa6";
import Starwhite from "../star/StarWhite";
export default function Portfilo() {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const toggle = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  return (
    <>
      <div className="container my-4 mx-sm-auto">
        <h2 className="text-center fs-1 fw-bold mb-3">PORTFOLIO COMPONENT</h2>
        <Starwhite/>
        <div className="row g-5 ">
          <div className="col-md-6 col-lg-4" onClick={() => { toggle(img1) }}>
            <div className={` ${style.style} position-relative`}>
              <img src={img1} alt=".." className="w-100 rounded-3 " />
              <div className={`${style.bg} position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center `}>
                <FaPlus size={100} className="text-white" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4" onClick={() => { toggle(img2) }}>
            <div className={` ${style.style} position-relative`}>
              <img src={img2} alt=".." className="w-100 rounded-3  " />
              <div className={`${style.bg} position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center `}>
                <FaPlus size={100} className="text-white" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 " onClick={() => { toggle(img3) }}>
            <div className={` ${style.style} position-relative`}>
              <img src={img3} alt=".." className="w-100 rounded-3  " />
              <div className={`${style.bg} position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center `}>
                <FaPlus size={100} className="text-white" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 " onClick={() => { toggle(img1) }}>
            <div className={` ${style.style} position-relative`}>
              <img src={img1} alt=".." className="w-100 rounded-3 " />
              <div className={`${style.bg} position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center `}>
                <FaPlus size={100} className="text-white" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 " onClick={() => { toggle(img2) }}>
            <div className={`${style.style} position-relative`}>
              <img src={img2} alt=".." className="w-100 rounded-3 " />
              <div className={`${style.bg} position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center `}>
                <FaPlus size={100} className="text-white" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 " onClick={() => { toggle(img3) }}>
            <div className={` ${style.style} position-relative`}>
              <img src={img3} alt=".." className="w-100 rounded-3 " />
              <div className={`${style.bg} position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex justify-content-center align-items-center  `}>
                <FaPlus size={100} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div >
      {
        open ? <div div className={`${style.overlay} d-flex justify-content-center align-items-center w-100 h-100 position-fixed top-0 bottom-0 end-0 start-0 bg-opacity-50`} onClick={() => setOpen(false)}>
          <div className="d-flex justify-content-center align-items-center" >

            <img src={currentImg} alt="" className="w-75" onClick={(e) => e.stopPropagation()} />
          </div>
        </div > : null
      }
    </>
  );
}
