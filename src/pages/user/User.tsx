import './User.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/quickbuyshop.png";
import { FaEdit } from 'react-icons/fa';

const User = () => {
    const { t } = useTranslation();
    const [userInfo, setUserInfo] = useState(null);

    return (
        <div className="main-content">
            <div className="user-container">
                <div className="user-header">
                    <div className="user-title">
                        <div className="user-avatar">
                            <img src={logo} alt="User Avatar" />
                        </div>
                        <div className="user-text">
                            <div className='user-name'>vietnq</div>
                            <div className='user-edit'>
                                <FaEdit size={12} />
                                Chỉnh sửa
                            </div>
                        </div>
                    </div>
                    <aside className="user-sidebar">
                        <NavLink to="profile">Hồ sơ</NavLink>
                        <NavLink to="purchases">Đơn mua</NavLink>
                    </aside>
                </div>
                <main className="user-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default User;
