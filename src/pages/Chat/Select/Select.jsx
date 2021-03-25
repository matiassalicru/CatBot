import React, { useState } from "react";


import { options } from "../../../data/Options";
import "./Select.css";

const Select = ({handleSelectedActions}) => {
  const [show, setShow] = useState(false);

  function scrollToBottom() {
    const chat = document.getElementById("chat");
    chat.scrollTop = chat.scrollHeight;
  }

  const flag = () => {
    setTimeout(() => {
      setShow(true);
      scrollToBottom();
    }, 1500);
  };

  flag();

  return (
    <>
      {show && (
        <div className="selector-content animate__animated animate__fadeInRight">
          <div className="selector-container">
            {options.map((op) => {
              return (
                <div
                  key={op.id}
                  className="selector-options"
                  onClick={(e) => handleSelectedActions(op.id)}
                >
                  <label> {op.text} </label>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Select;
