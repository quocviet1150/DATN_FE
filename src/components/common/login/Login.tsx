import { useEffect } from "react";
import { login } from "../../../api/auth";

export default function Login() {

    useEffect(() => {
        login({ email: "test@gmail.com", password: "123456" })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ background: "#fff", padding: 20, borderRadius: 8 }}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" /><br />
            <input type="password" placeholder="Password" /><br />
            <button>Login</button>
        </div>
    );
}
