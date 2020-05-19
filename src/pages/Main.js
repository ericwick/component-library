import React from 'react';
import './Main.scss';
import routes from './loadable/routes';
import SideNav from '../components/sidenav/sidenav';

function Main() {
  return (
    <div className="main-page">
      <SideNav />
      <div className="main-page__body">{routes}</div>
    </div>
  );
}

export default Main;
