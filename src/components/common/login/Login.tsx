import { useEffect, useState } from "react";
import { login } from "../../../api/auth";
import "./Login.css";
import Input from "../../features/input/Input";

export default function Login() {

    const [username, setUsername] = useState("");

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
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Nhập username..."
                            style={{ width: "320px" }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
