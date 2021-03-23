import React from "react";
import "./Select.css";

const Select = ({ options, handleSelectedActions }) => {
  return (
    <div className="selector-content">
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
  );
};

export default Select;
