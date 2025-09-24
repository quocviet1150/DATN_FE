import { useEffect } from "react";
import { register } from "../../../api/auth";
import "./Register.css";

export default function Register() {
  useEffect(() => {
    register({ email: "test@gmail.com", password: "123456", name: "Test" })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="register-container">123</div>
    </div>
  );
}
