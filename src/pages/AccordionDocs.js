import React from "react";
import "./Main.scss";

// Components
import Accordion from "../components/accordion/accordion";

function AccordionDocs() {
    return (
        <div>
            <h1>Accordion Docs</h1>
            <p>
                Accordions are used to present chunks of information that is
                organized by topic and displayed in a neat box. Clicking the
                header will drop down the body and display the provided content.
            </p>
            <div>
                <Accordion title={"Title Accordion"} body={"Accordion Body"} />
                <Accordion
                    title={"Title Accordion 2"}
                    body={"Accordion Body 2"}
                />
                <Accordion
                    title={"Title Accordion 3"}
                    body={"Accordion Body 3"}
                />
            </div>
        </div>
    );
}

export default AccordionDocs;
