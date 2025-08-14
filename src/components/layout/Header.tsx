import { Link } from "react-router-dom";

export default function Header() {
    const apiBase = import.meta.env.VITE_BACKEND_API_BASE;
    console.log("API Base URL:", apiBase);
    return (
        <header style={{ padding: "10px", background: "#f5f5f5" }}>
            <nav>
                <Link to="/" style={{ marginRight: 10 }}>Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
}
