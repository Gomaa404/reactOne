import React from 'react'
import style from './style.module.css'
export default function STwo() {
  return (
    <>
      <div className={style.style}>
        <div className='row g-5'>
          <div className='col-sm-4  pt-3'>
            <h3 className='mb-2 pt-4'>LOCATION</h3>
            <p className='mb-3'>2215 John Daniel Drive</p>
            <p className='mb-3'>Clark, MO 65243</p>
          </div>
          <div className='col-sm-4 pt-3'>
            <h3 className='text-center mb-4 pt-4 '>AROUND THE WEB</h3>
            <div className='row g-5 justify-content-center me-3'>
              <i className={`${style.icon} col-md-6 fa-brands fa-facebook `}></i>
              <i className={`${style.icon} col-md-6 fa-brands fa-twitter `}></i>
              <i className={`${style.icon} col-md-6 fa-brands fa-linkedin-in `}></i>
              <i className={`${style.icon} col-md-6 fa-solid fa-globe `}></i>
            </div>
          </div>
          <div className='col-sm-4 pt-3'>
            <h3 className='pt-4'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </>
  )
}
