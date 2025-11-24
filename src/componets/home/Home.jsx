import React from 'react'
import personl from '../../assets/avataaars.svg'
import style from "./Home.module.css"
import Star from '../star/Star'
export default function Home() {
  return (
    <div className={`${style.style}`}>
      <div className={`${style.img} d-flex justify-content-center mb-4 mx-auto `}>
        <img src={personl} alt=".." className='w-100 ' />
      </div>
      <div className='d-flex flex-column justify-content-center align-content-center text-center'>
        <h3 className="fs-1 fw-bolder mb-3">START FRAMEWORK</h3>
        <Star/>
        <p >Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
