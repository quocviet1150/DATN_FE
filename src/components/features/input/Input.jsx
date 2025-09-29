import React from "react";
import "./Input.css"; // import file css riêng

const Input = ({
  label,
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
      {error && <p className="input-error-message">{error}</p>}
    </div>
  );
};

export default Input;
