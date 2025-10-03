import { SiInstagram, SiZalo } from 'react-icons/si';
import './Header.css'
import { AiFillFacebook } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";
import ReactCountryFlag from 'react-country-flag';
import { useState } from 'react';
import Loading from '../../common/loading/Loading';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    const token = '123'
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
                                        <div className="navbar-container-account-item" onClick={() => handleNavigate("/profile")}>
                                            {t('profile')}
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
                        1
                    </div>
                </div>
            </div>
        </header>
    );
}
