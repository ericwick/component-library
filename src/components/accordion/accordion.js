import React, { useState, useRef } from 'react';
import className from 'classnames';
import './accordion.scss';
import chevron from '../../assets/icons/chevron.svg';

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef('content');
  const body = useRef('body');
  const chevronRef = useRef('chevron');
  const title = useRef('title');

  const bodyClassName = className('accordion__body', {
    'accordion__body--opened': active,
    'accordion__body--closed': !active,
  });

  const headerClassName = className('accordion__header', {
    'accordion__header--opened': active,
    'accordion__header--closed': !active,
  });

  const chevronClassName = className('accordion__chevron', {
    'accordion__chevron--active': active,
    'accordion__chevron--inactive': !active,
  });

  return (
    <div className="accordion">
      <button className={headerClassName} onClick={() => setActive(!active)}>
        <p ref={title} className="accordion__header--title">
          {props.title}
        </p>
        <img
          ref={chevronRef}
          src={chevron}
          alt={active ? 'Accordion Open' : 'Accordion Closed'}
          className={chevronClassName}
        />
      </button>
      <div ref={content} className={bodyClassName}>
        <p ref={body} className="accordion__body--text">
          {props.body}
        </p>
      </div>
    </div>
  );
}

export default Accordion;
