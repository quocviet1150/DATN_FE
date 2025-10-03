import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { AiFillFacebook } from 'react-icons/ai';
import { FaChevronDown, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import { SiInstagram, SiZalo } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/quickbuyshopwhite.png";
import Loading from '../../common/loading/Loading';
import NavbarSearch from '../../common/navbarSearch/NavbarSearch';
import './Header.css';

export default function Header() {

    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    const token = '';
    const cartCount = 25;
    const navigate = useNavigate();

    const getLanguageLabel = () => {
        return i18n.language === "vi" ? "Tiếng Việt" : "English";
    };

    const changeLanguage = (lng: string | undefined) => {
        setLoading(true);
        i18n.changeLanguage(lng).then(() => {
            setTimeout(() => {
                setLoading(false);
            }, 200);
        });
    };

    const handleNavigate = (path: string) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(path);
        }, 200);
    };

    if (loading) return <Loading />;

    return (
        <header className="quickbuy-top quickbuy-top--sticky">
            <div className="navbar-wrapper">
                <div className="container-wrapper">
                    <div className="navbar-container">
                        <div className="navbar-container-connect">
                            <div className="navbar-container-connect-item">{t('connect')}</div>
                            <div className="navbar-container-connect-item">
                                <div className="navbar-container-connect-icon zalo">
                                    <SiZalo size={28} />
                                </div>

                                <div className="navbar-container-connect-icon facebook">
                                    <AiFillFacebook size={28} />
                                </div>

                                <div className="navbar-container-connect-icon instagram">
                                    <SiInstagram size={28} />
                                </div>
                            </div>
                        </div>
                        <div className="navbar-container-account">
                            <div className="navbar-container-account-item">1</div>
                            <div className="navbar-container-account-item">
                                <FaQuestionCircle size={14} />
                                <div className="navbar-container-connect-item">
                                    {t('support')}
                                </div>
                            </div>
                            <div className="navbar-container-account-item">
                                {i18n.language === "vi" ? (
                                    <ReactCountryFlag
                                        countryCode="VN"
                                        svg
                                        style={{ width: "16px", height: "16px" }}
                                    />
                                ) : (
                                    <ReactCountryFlag
                                        countryCode="GB"
                                        svg
                                        style={{ width: "16px", height: "16px" }}
                                    />
                                )}
                                <div className="navbar-container-connect-item">
                                    {getLanguageLabel()}
                                </div>
                                <FaChevronDown size={14} />
                                <ul className="language-popup">
                                    <li onClick={() => changeLanguage("vi")}>
                                        <ReactCountryFlag countryCode="VN" svg style={{ width: "14px", height: "14px" }} />
                                        Tiếng Việt</li>
                                    <li onClick={() => changeLanguage("en")}>
                                        <ReactCountryFlag countryCode="GB" svg style={{ width: "14px", height: "14px" }} />
                                        English</li>
                                </ul>
                            </div>

                            <div className="navbar-container-account-item">
                                {token ? (
                                    <div>
                                        <div className="navbar-container-account-item">
                                            <div className="avatar">
                                                <img
                                                    src="https://i.pravatar.cc/300"
                                                    alt="Avatar"
                                                />
                                            </div>
                                            <div className="username">
                                                vietnq
                                            </div>

                                            <ul className="user-popup">
                                                <li>{t('my_account')}</li>
                                                <li>{t('my_purchases')}</li>
                                                <li>{t('logout')}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <div className="navbar-container-account-item" onClick={() => handleNavigate("/login")}>
                                            {t('login')}
                                        </div>

                                        <div style={{ color: "white", cursor: "default" }}>|</div>

                                        <div className="navbar-container-account-item" onClick={() => handleNavigate("/register")}>
                                            {t('register')}
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                    <div className="navbar-header">
                        <div className="navbar-header-logo" onClick={() => handleNavigate("/")}>
                            <img src={logo} alt="Logo" className="logo-image-1" />
                        </div>

                        <div className="navbar-header-search">
                            <NavbarSearch />
                        </div>

                        <div className='navbar-header-cart-container'>
                            <div className="navbar-header-cart">
                                <FaShoppingCart className='cart-icon' />
                                <span className="cart-badge">{cartCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
