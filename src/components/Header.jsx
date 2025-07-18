import { Link } from "react-router-dom";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../assets/css/pricing.css";
import "../assets/css/style.css";
import account from "../assets/images/account.svg";
import application from "../assets/images/application.svg";
import cat from "../assets/images/cat.svg";
import login from "../assets/images/login.svg";
import search from "../assets/images/search.svg";
import MainMenuItem from "./MainMenuItem.jsx";

function Header() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
          to={"/"}
        >
          <img src={cat} height={32} alt="cat" />
          <span className="fs-4 text-primary ms-2">Найди питомца</span>{" "}
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <MainMenuItem to="/post/new" imgSrc={application} alt="new post" />
          <MainMenuItem to="/search" imgSrc={search} alt="search" />
          <MainMenuItem to="/account" imgSrc={account} alt="person" />
          <MainMenuItem to="/login" imgSrc={login} alt="person" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
