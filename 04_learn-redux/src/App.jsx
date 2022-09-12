import React, {PureComponent} from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Category from './pages/Category';

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Home />
        <About />
        <Profile />
        <Category />
      </div>
    );
  }
}

export default App;
