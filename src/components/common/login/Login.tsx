import { useEffect } from "react";
import { login } from "../../../api/auth";

export default function Login() {

    useEffect(() => {
        login({ email: "test@gmail.com", password: "123456" })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
        
        </>
    );
}
