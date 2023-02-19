import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img className="cover-image" src={Cover} alt="" />
        <img className="profile-image" src={Profile} alt="" />
      </div>

      <div className="profileName">
        <span>ProfileName</span>
        <span>Web Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,800</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="following">
            <span>1</span>
            <span>Following</span>
          </div>
        </div>
        <hr />
      </div>
      <div className="profile-link">
        <span>My Profile</span>
      </div>
    </div>
  );
};

export default ProfileCard;
