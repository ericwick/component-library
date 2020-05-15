import React from "react";
import route from "./loadable/routes";
import SideNav from "../components/sidenav/sidenav";

function Main() {
    return (
        <div className="main">
            <SideNav />
            <h1>Component-Library</h1>
            {route}
        </div>
    );
}

export default Main;
