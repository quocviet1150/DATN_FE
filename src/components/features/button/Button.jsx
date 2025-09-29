import React from "react";
import "./Button.css";

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
    width = "auto",
    className = "",
    style = {}
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn btn-${variant} ${className}`}
            disabled={disabled}
            style={{ width, ...style }}
        >
            {children}
        </button>
    );
};

export default Button;
