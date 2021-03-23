import React from "react";
import "./UserItem.css";
import womanUser from "../../../assets/images/womanuser.png";

export const UserItem = ({ text }) => {
  return (
    <div className="user-item-container">
      <div className="user-item-messages">
        <label> {text} </label>
      </div>
      <img src={womanUser} alt="me-avatar" />
    </div>
  );
};
