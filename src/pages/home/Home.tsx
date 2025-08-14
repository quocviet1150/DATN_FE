import { useTranslation } from "react-i18next";

export default function Home() {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <h1>{t("welcome")}</h1>

            <button onClick={() => i18n.changeLanguage("en")}>English</button>
            <button onClick={() => i18n.changeLanguage("vi")}>Tiếng Việt</button>
        </div>
    );
}
