import React from "react";
import style from "./About.module.css";
import Star from "../star/Star";
export default function About() {
  return (
    <div className={`${style.style} `}>
      <h2 className="fs-1 fw-bold mb-3 ">ABOUT COMPONENT</h2>
      <Star />
      <div className="row container px-5">
        <div className="col-md-6 ps-md-5 pe-md-3 mb-3">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="col-md-6 ps-md-3 pe-md-5 mb-3">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
