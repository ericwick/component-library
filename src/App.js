import React from 'react';
import SideNav from './components/sidenav/sidenav';
import route from './pages/loadable/routes';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <SideNav />
        {route}
      </div>
    );
  }
}

export default App;
