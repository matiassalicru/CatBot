import React from "react";
import "./UserItem.css";
// import womanUser from "../../../assets/images/womanuser.png";

export const UserItem = ({ text }) => {
  return (
    <div className="user-item-container animate__animated animate__fadeInRight">
      <div className="user-item-messages">
        <label> {text} </label>
      </div>
    </div>
  );
};
