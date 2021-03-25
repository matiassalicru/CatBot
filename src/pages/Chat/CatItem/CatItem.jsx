import "./CatItem.css";
import React from "react";
import catAvatar from "../../../assets/images/cat.png";

export const CatItem = ({ text }) => {
  return (
    <div className="cat-item-container animate__animated animate__fadeInLeft">
      <img src={catAvatar} alt="cat-avatar" />
      <div className="cat-item-messages">
        {text.map((t, index) => (
          <label key={index}> {t} </label>
        ))}
      </div>
    </div>
  );
};
