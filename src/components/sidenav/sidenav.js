import React from "react";
import "./sidenav.scss";

import { Link } from "react-router-dom";
import components from "./index";

function SideNav() {
    return (
        <nav className="navbar">
            {components.map((e, i) => {
                return (
                    <Link key={i} className="navbar__link" to={e.link}>
                        {e.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default SideNav;
