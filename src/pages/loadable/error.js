import React from 'react';
import './styles/container.scss';
import './styles/text.scss';
import './styles/button.scss';

const Error = (props) => {
  return (
    <div className="container">
      <p className="static-text">404 Error</p>
      <button className="loadable-button" onClick={props.retry}>
        Retry
      </button>
    </div>
  );
};

export default Error;
