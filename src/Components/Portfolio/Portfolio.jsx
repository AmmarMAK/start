import React from 'react'
import './Portfolio.css'
import Portfolio1 from '../../assets/images/port1.png'
import Portfolio2 from '../../assets/images/port2.png'
import Portfolio3 from '../../assets/images/port3.png'
export default function Portfolio() {
  return (
    <>
      <h2 className="text-center">Portfolio Component</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="portfolio-line"></div>
        <i className="icon-color fa-solid fa-star text-black"></i>
        <div className="portfolio-line"></div>
      </div>

      <div className="container mt-5 vh-100">
        <div className="row g-3 d-flex justify-content-center align-items-center mb-3">
          <div className="col-md-4 position-relative port-img ">
            <img src={Portfolio1} alt="..." className="w-100 " />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fs-1"></i>
            </div>
          </div>
          <div className="col-md-4   position-relative port-img ">
            <img src={Portfolio2} alt="..." className="w-100" />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fs-1"></i>
            </div>
          </div>
          <div className="col-md-4   position-relative port-img ">
            <img src={Portfolio3} alt="..." className="w-100" />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fs-1"></i>
            </div>
          </div>
          <div className="col-md-4   position-relative port-img ">
            <img src={Portfolio1} alt="..." className="w-100" />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fs-1"></i>
            </div>
          </div>
          <div className="col-md-4   position-relative port-img ">
            <img src={Portfolio2} alt="..." className="w-100" />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fs-1"></i>
            </div>
          </div>
          <div className="col-md-4   position-relative port-img ">
            <img src={Portfolio3} alt="..." className="w-100" />
            <div className="layer">
              <i class="fa-solid fa-plus text-white fs-1"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
