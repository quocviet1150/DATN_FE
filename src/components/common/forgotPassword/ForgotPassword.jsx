import './ForgotPassword.css';

export default function ForgotPassword() {
    return (
        <div className="page-content-forgot-password">
            <div className="forgot-password-container">
                <div className="forgot-password-box">
                    <h2>Quên mật khẩu</h2>
                    <input type="email" placeholder="Nhập email" />
                    <button>Gửi</button>
                </div>
            </div>
        </div>
    );
}