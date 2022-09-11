import React, {PureComponent} from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Home />
        <Profile />
      </div>
    );
  }
}

export default App;
