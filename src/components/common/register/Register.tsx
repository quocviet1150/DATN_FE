import { useEffect } from "react";
import { register } from "../../../api/auth";
import "./Register.css";
import { useTranslation } from "react-i18next";

export default function Register() {

  const { t } = useTranslation();

  useEffect(() => {
    register({ email: "test@gmail.com", password: "123456", name: "Test" })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page-content">
      <div className="login-container">
        <div className="login-logo">
        </div>
        <div className="login-form">
          <div className="login-title">{t("register")}</div>
          <div className="form-container">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}
