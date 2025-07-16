import React from 'react';
import {Link} from "react-router-dom";

function MainMenuItem({to, imgSrc, alt}) {
    return (
        <Link className="py-2 link-body-emphasis text-decoration-none ps-3 pe-3" to={to}><img src={imgSrc} height={20} alt={alt} /></Link>
    );
}

export default MainMenuItem;