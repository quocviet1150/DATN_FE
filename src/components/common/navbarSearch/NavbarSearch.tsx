import { FaSearch } from "react-icons/fa";
import "./NavbarSearch.css";
import { useTranslation } from "react-i18next";

function NavbarSearch() {

    const { t } = useTranslation();

  return (
    <div className="navbar-header-search-container">
      <input
        type="text"
        placeholder={t("search.placeholder_input_header")}
        className="search-input"
      />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
}

export default NavbarSearch;
