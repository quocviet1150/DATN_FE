import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from "react-icons/fa";
import Button from "../../../common/button/Button";
import Input from "../../../common/input/Input";
import './Verify.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Verify() {

    const { t } = useTranslation();
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = (location.state as { from?: string })?.from || "/";

    const handleBack = () => {
        navigate(from);
    };

    const handleConfirm = () => {
        if (!code) {
            setError(t("validation.codeRequired"));
            return;
        }
        setError("");
        navigate("/login");
    };

    return (
        <div className="page-content-forgot-password">
            <div className="forgot-password-container">
                <div className="forgot-password-box">
                    <div className="forgot-password-title">
                        <div>
                            <FaArrowLeft className="back-icon-svg" onClick={handleBack}/>
                        </div>
                        <div className='forgot-password-title-label'>{t("verify")}</div>
                    </div>
                    <Input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder={t("enter_code")}
                        error={error}
                        style={{ width: "100%", display: "block", margin: "10px auto 0 auto" }}
                    />

                    <Button width="100%" variant="login-often" onClick={handleConfirm}>
                        {t("confirm")}
                    </Button>
                </div>
            </div>
        </div>
    );
}