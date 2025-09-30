import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../features/button/Button";
import Input from "../../features/input/Input";
import PasswordInput from "../../features/passwordInput/PasswordInput";
import "./Register.css";
import { validateFields } from "../../../utils/Validation";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  userName?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Register() {

  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const rules = [
      {
        field: "firstName",
        value: firstName,
        required: true,
        maxLength: 50,
        customError: "validation.firstNameInvalid",
      },
      {
        field: "lastName",
        value: lastName,
        required: true,
        maxLength: 50,
        customError: "validation.lastNameInvalid",
      },
      {
        field: "email",
        value: email,
        required: true,
        maxLength: 255,
        regex: /^\S+@\S+\.\S+$/,
        customError: "validation.emailInvalid",
      },
      {
        field: "userName",
        value: userName,
        required: true,
        minLength: 6,
        maxLength: 255,
        regex: /^\S+$/,
        customError: "validation.userNameInvalid",
      },
      {
        field: "password",
        value: password,
        required: true,
        maxLength: 255,
        regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
        customError: "validation.passwordTooShort",
      },
      {
        field: "confirmPassword",
        value: confirmPassword,
        required: true,
        maxLength: 255,
        matchField: password,
        customError: "validation.confirmPasswordMismatch",
      },
    ];

    const errors = validateFields(rules, t);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // ✅ Submit form
    }
  };

  return (
    <div className="page-content">
      <div className="register-container">
        <div className="register-logo">
        </div>
        <div className="register-form">
          <div className="register-title">{t("register")}</div>
          <div className="form-container">
            <div className="register-fullName">
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={t("enter_first_name")}
                style={{ width: "100%" }}
                error={errors.firstName}
              />
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={t("enter_last_name")}
                style={{ width: "100%" }}
                error={errors.lastName}
              />
            </div>

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("enter_email")}
              style={{ width: "100%" }}
              error={errors.email}
            />

            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={t("enter_username")}
              style={{ width: "100%" }}
              error={errors.userName}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("enter_password")}
              style={{ width: "100%" }}
              error={errors.password}
            />

            <PasswordInput
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t("enter_confirm_password")}
              style={{ width: "100%" }}
              error={errors.confirmPassword}
            />

            <Button width="100%" variant="login-often" onClick={handleSubmit}>
              {t("register")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
