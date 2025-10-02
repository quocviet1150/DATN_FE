import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from "react-icons/fa";
import Button from "../../../common/button/Button";
import Input from "../../../common/input/Input";
import './ForgotPassword.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {

    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = (location.state as { from?: string })?.from || "/";


    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleNext = () => {
        if (!email) {
            setError(t("validation.emailRequired"));
            return;
        }
        if (!validateEmail(email)) {
            setError(t("validation.emailInvalid"));
            return;
        }
        setError("");
        console.log("Email hợp lệ:", email);
    };

    const handleBack = () => {
        navigate(from);
    };

    return (
        <div className="page-content-forgot-password">
            <div className="forgot-password-container">
                <div className="forgot-password-box">
                    <div className="forgot-password-title">
                        <div>
                            <FaArrowLeft className="back-icon-svg" onClick={handleBack}/>
                        </div>
                        <div className='forgot-password-title-label'>{t("forgot_password_title")}</div>
                    </div>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("enter_email")}
                        error={error}
                        style={{ width: "100%", display: "block", margin: "10px auto 0 auto" }}
                    />

                    <Button width="100%" variant="login-often" onClick={handleNext}>
                        {t("next")}
                    </Button>
                </div>
            </div>
        </div>
    );
}