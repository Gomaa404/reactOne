import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './nav.module.css'

export default function Navber() {
  return (
    <>
      <nav className={`${style.bg} navbar navbar-expand-lg  `}>
        <div className="container px-2 py-3 ">
          <Link className="navbar-brand text-white  fs-2 fw-bolder" to={''}>START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item px-2 ">
                <NavLink className=" nav-link text-white" aria-current="page" to={'about'}>ABOUT</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className=" nav-link text-white" aria-current="page" to={'portfolio'}>PORTFOLIO</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link text-white" aria-current="page" to={'contact'}>CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
