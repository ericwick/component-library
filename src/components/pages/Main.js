import React from "react";
import SideNav from "../sidenav/sidenav";
import AccordionDocs from "./AccordionDocs";

function Main() {
    return (
        <div className="main">
            <SideNav />
            <div className="main__body">
                <AccordionDocs />
            </div>
        </div>
    );
}

export default Main;
