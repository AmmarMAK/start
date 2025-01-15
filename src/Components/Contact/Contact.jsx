import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <>
      <h1 className="text-center">Contact Section</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="contact-line"></div>
        <i className="icon-color fa-solid fa-star text-black"></i>
        <div className="contact-line"></div>
      </div>

      <div className="container vh-100">
        <input type="text" className="form-control  border-0 border-bottom py-3 mt-10 mb-10" placeholder="Name" />
        <input
          type="number"
          className="form-control  border-0 border-bottom py-3 mt-10 mb-10"
          placeholder="User Age"
        />
        <input type="email" className="form-control  border-0 border-bottom py-3 mt-10 mb-10" placeholder="Email" />
        <input
          type="password"
          className="form-control  border-0 border-bottom py-3 mt-10 mb-10"
          placeholder="Password"
        />
        <button className="btn " id="submit">Submit</button>
      </div>
    </>
  );
}
