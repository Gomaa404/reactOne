import React from 'react'
import Star from '../star/Star'
import style from "./contact.module.css"
import Starwhite from '../star/Starwhite'
export default function Contact() {
  return (
    <div className='container  my-4'>
      <h2 className="text-center fs-1 fw-bold mb-3">CONTACT SECTION</h2>
      <Starwhite/>
      <div className="m-5 pt-4 ">
        <div className={`${style.Gf} mb-5 d-flex justify-content-center position-relative  mx-auto`}>
          <input type="text" className={style.forms} placeholder='userName' />
          <label >userName :</label>
        </div>
        <div className={`${style.Gf} mb-5 d-flex justify-content-center position-relative  mx-auto`}>
          <input type="text" className={style.forms} placeholder='userAge' />
          <label >userAge :</label>
        </div>
        <div className={`${style.Gf} mb-5 d-flex justify-content-center position-relative  mx-auto`}>
          <input type="email" className={style.forms} placeholder='userEmail' />
          <label >userEmail :</label>
        </div>
        <div className={`${style.Gf} mb-4 d-flex justify-content-center position-relative  mx-auto`}>
          <input type="password" className={style.forms} placeholder='userPassword' />
          <label>userPassword :</label>
        </div>
        <div className={`${style.Gf} mx-auto`}>
          <button className={`${style.btnForm} btn`}> send Message </button>
        </div>
      </div>
    </div>
  )
}
