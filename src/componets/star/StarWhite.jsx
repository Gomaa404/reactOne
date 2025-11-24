import React from 'react'
import style from "./se.module.css"
export default function Starwhite() {
    return (
        <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className={`${style.right} bg-dark`}></div>
            <i className={`${style.icon} fa-solid fa-star  mx-3 `}></i>
            <div className={`${style.right} bg-dark`}></div>
        </div>
    )
}
