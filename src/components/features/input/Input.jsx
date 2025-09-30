import React from "react";
import "./Input.css";

const Input = ({
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  style = {},
}) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? "input-error" : ""}`}
        style={style}
      />
      {error && <div className="input-error-message">{error}</div>}
    </div>
  );
};

export default Input;
