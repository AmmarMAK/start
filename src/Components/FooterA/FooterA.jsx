import React from 'react'
import './FooterA.css'
export default function FooterA() {
  return (
    <>
      <div className="card-group p-5 footerA text-center fs-6">
        <div className="card footerA">
          <div className="card-body ">
            <h5 className="card-title ">LOCATION</h5>
            <p className="card-text ">2215 John Daniel Drive</p>
            <p className="card-text">Clark, MO 65243</p>
          </div>
        </div>
        <div className="card footerA ">
          <div className="card-body ">
            <h5 className="card-title ">AROUND THE WEB</h5>
            <div className="">
              <i className="fa-brands fa-facebook  m-1 fs-6 border border-1 p-2 rounded-circle "></i>
              <i className="fa-brands fa-twitter m-1 fs-6 border border-1 p-2 rounded-circle "></i>
              <i className="fa-brands fa-linkedin-in m-1 fs-6 border border-1 p-2 rounded-circle "></i>
              <i className="fa-solid fa-globe m-1 fs-6 border border-1 p-2 rounded-circle "></i>
            </div>
          </div>
        </div>
        <div className="card footerA">
          <div className="card-body ">
            <h5 className="card-title ">ABOUT FREELANCER</h5>
            <p className="card-text">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
