import React, {PureComponent} from 'react';
import appStyle from './style.module.css';

export class App extends PureComponent {
  render() {
    return <div className={appStyle.app}>App</div>;
  }
}

export default App;
