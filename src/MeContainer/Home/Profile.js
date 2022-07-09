import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="/#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="/#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="/#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="/#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="/#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""} Hello I'm{" "}
              <span className="highlighted-text">Sagar Shukla</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1></h1>
              <span className="profile-role-tagline">
                ye react seekhna itna mushkil kahe hae be...
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn">
              {""} Hire me {""}
            </button>
            <a href="/resume.pdf" download="resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background">
            <div className="profile-picture-background:hover"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
