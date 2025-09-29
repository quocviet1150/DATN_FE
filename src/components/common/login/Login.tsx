import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/auth";
import Button from "../../features/button/Button";
import Input from "../../features/input/Input";
import PasswordInput from "../../features/passwordInput/PasswordInput";
import "./Login.css";

export default function Login() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [pw, setPw] = useState("");
    const [err, setErr] = useState("");
    const [usernameOrEmail, setUsernameOrEmail] = useState("");

    useEffect(() => {
        login({ email: "test@gmail.com", password: "123456" })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleChange = (e) => {
        setPw(e.target.value);
    };

    const handleClick = () => {
        navigate("/register");
    };

    return (
        <div className="page-content">
            <div className="login-container">
                <div className="login-logo">

                </div>
                <div className="login-form">
                    <div className="login-title">{t("login")}</div>
                    <div className="form-container">
                        <Input
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                            placeholder={t("enter_username")}
                            style={{ width: "100%" }}
                        />

                        <PasswordInput
                            value={pw}
                            onChange={handleChange}
                            placeholder={t("enter_password")}
                            error={err}
                            width="100%"
                            style={{ marginBottom: "40px", marginTop: "40px" }}
                        />

                        <Button width="100%" variant="login-often" onClick={() => alert("Primary")}>
                            {t("login")}
                        </Button>

                        <div className="login-forgot-password">{t("forgot_password")}</div>

                        <div className="divider">
                            <span>{t("or")}</span>
                        </div>

                        <div className="login-register">
                            <div>{t("new_to_quickbuy")}</div>
                            <div className="register-link" onClick={handleClick}>{t("register")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
