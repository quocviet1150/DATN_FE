import { useEffect, useState } from "react";
import { login } from "../../../api/auth";
import "./Login.css";
import Input from "../../features/input/Input";

export default function Login() {

    const [name, setName] = useState("");

    useEffect(() => {
        login({ email: "test@gmail.com", password: "123456" })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="page-content">
            <div className="login-container">
                <div className="login-logo">

                </div>
                <div className="login-form">
                    <h2>Login</h2>
                    <form>
                        <Input
                            label="Tên đăng nhập"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="username"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
