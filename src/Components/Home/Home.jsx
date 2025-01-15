import React from "react";
import "./Home.css";
import avatars from "../../assets/images/avatars.svg";
export default function Home() {
  return (
    <div className="body text-center text-white vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        
          <img src={avatars} alt="" className="" id="home-pic" />
          <h1 className="">START FRAMEWORK</h1>       
          <div className="d-flex justify-content-center align-items-center">
            <div className="line"></div>
            <i className="icon-color fa-solid fa-star"></i>
            <div className="line"></div>
          </div>
          <p className=" fs-3">
            Graphic Artist - Web Designer - Illustrator
          </p>
      </div>
    </div>
  );
}
