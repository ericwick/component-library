import React, { useState, useRef } from "react";
import "./accordion.scss";
import className from "classnames";

import chevron from "../../assets/icons/chevron.svg";

function Accordion(props) {
    const [active, setActive] = useState(false);
    // const [setRotate, setRotateState] = useState("accordion__icon");
    const content = useRef(null);

    const bodyClassName = className("accordion__body", {
        "accordion__body--opened": active,
        "accordion__body--closed": !active,
    });

    const headerClassName = className("accordion__header", {
        "accordion__header--opened": active,
        "accordion__header--closed": !active,
    });

    const chevronClassName = className("accordion__chevron", {
        "accordion__chevron--active": active,
        "accordion__chevron--inactive": !active,
    });

    return (
        <div className="accordion">
            <button
                className={headerClassName}
                onClick={() => setActive(!active)}
            >
                <p className="accordion__header--title">{props.title}</p>
                <img src={chevron} alt="" className={chevronClassName} />
            </button>
            <div ref={content} className={bodyClassName}>
                <p className="accordion__body--text">{props.body}</p>
            </div>
        </div>
    );
}

export default Accordion;
