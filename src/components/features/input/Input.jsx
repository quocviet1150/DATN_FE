import React from "react";
import "./Input.css";

const Input = ({ label, type = "text", value, onChange, name }) => {
  return (
    <div className="input-group">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
