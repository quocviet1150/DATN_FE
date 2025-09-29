import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // 👁️ icon
import "./PasswordInput.css";

const PasswordInput = ({
    value,
    onChange,
    placeholder = "",
    error = "",
    width = "100%",
    className = "",
    id
}) => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => setVisible((v) => !v);
    const inputId = id || `password-input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`pw-wrapper ${className}`} style={{ width }}>
            <div className={`pw-field-wrapper ${error ? "pw-has-error" : ""}`}>
                <input
                    id={inputId}
                    className="pw-input"
                    type={visible ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />

                <button
                    type="button"
                    className="pw-toggle-btn"
                    onClick={toggleVisible}
                    aria-label={visible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                    {visible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
            </div>

            {error && (
                <p className="pw-error-message" id={`${inputId}-error`}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default PasswordInput;
