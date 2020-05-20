import React from 'react';
import './Main.scss';
import Bento from '../components/bento/bento';

function BentoDocs() {
  return (
    <div>
      <h1>Bento Menu Docs</h1>
      <p>
        Bento Menus are an adaptation of hamburger menus and top/bottom mobile
        navigation. A well-placed bento menu could also serve as a more discreet
        method of central navigation on a SPA or web page as well.
      </p>
      <div>
        <Bento />
      </div>
    </div>
  );
}

export default BentoDocs;
