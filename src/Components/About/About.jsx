import React from "react";
import "./about.css";
export default function About() {
  return (
    <div className="about-body text-white vh-100 ">
      <div className="container text-center">
        <h1>About Component</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line"></div>
          <i className="icon-color fa-solid fa-star"></i>
          <div className="line"></div>
        </div>
      </div>
      <div className="container d-flex justify-content-between align-items-between">
        <div className="row">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
