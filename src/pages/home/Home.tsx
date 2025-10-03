import { useTranslation } from "react-i18next";
import "./Home.css";

export default function Home() {
    const { t } = useTranslation();
    return (
        <div className="main-content">
            <h1>{t("welcome")}</h1>
        </div>
    );
}
