import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../assets/css/pricing.css";
import "../../assets/css/style.css";
import account from "../../assets/images/account.svg";
import application from "../../assets/images/application.svg";
import cat from "../../assets/images/cat.svg";
import login from "../../assets/images/login.svg";
import search from "../../assets/images/search.svg";
import LinkWithImg from "../LinkWithImg";
import Logout from "./Logout";
import getToken from "../../general/getToken";

function isLoggedIn() {
  let token = getToken();
  let result = token != undefined;
  return result;
}

function Header() {
  const LINK_CLASS_NAME =
    "py-2 link-body-emphasis text-decoration-none ps-3 pe-3";
  const loggedIn = isLoggedIn();

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
          <LinkWithImg
            to="/search"
            imgSrc={search}
            alt="search"
            className={LINK_CLASS_NAME}
          />

          <LinkWithImg
            to="/post/new"
            imgSrc={application}
            alt="new post"
            className={LINK_CLASS_NAME}
          />
          {loggedIn && (
            <>
              <LinkWithImg
                to="/account"
                imgSrc={account}
                alt="person"
                className={LINK_CLASS_NAME}
              />
              <Logout />
            </>
          )}

          {!loggedIn && (
            <LinkWithImg
              to="/login"
              imgSrc={login}
              alt="login"
              className={LINK_CLASS_NAME}
            />
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
