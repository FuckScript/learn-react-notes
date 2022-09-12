import React, {PureComponent} from 'react';
import About from './pages/About';
import Category from './pages/Category';

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <About />
        <Category />
      </div>
    );
  }
}

export default App;
