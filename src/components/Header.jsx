import React from 'react';
import {Link} from "react-router-dom";

import cat from '../assets/images/cat.svg';
import application from '../assets/images/application.svg';
import search from '../assets/images/search.svg';
import account from '../assets/images/account.svg';
import login from '../assets/images/login.svg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../assets/css/pricing.css';
import '../assets/css/style.css';


function Header() {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link className="d-flex align-items-center link-body-emphasis text-decoration-none" to={'/'}>
                    <img src={cat} height={32} alt="cat" />
                    <span className="fs-4 text-primary ms-2">Найди питомца</span>{" "}
                </Link>                
                
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <a
                    className="py-2 link-body-emphasis text-decoration-none ps-3 pe-3"
                    href="#"
                >
                    <img src={application} height={20} alt="application" />
                </a>
                <a
                    className="py-2 link-body-emphasis text-decoration-none ps-3 pe-3"
                    href="#"
                >
                    <img src={search} height={20} alt="search" />
                </a>
                <a
                    className="py-2 link-body-emphasis text-decoration-none ps-3 pe-3"
                    href="#"
                >
                    <img src={account} height={20} alt="person" />
                </a>

                <Link className="py-2 link-body-emphasis text-decoration-none ps-3 pe-3" to={'/login'}><img src={login} height={20} alt="login" /></Link>

                </nav>
            </div>
        </header>
     
    );
}

export default Header;