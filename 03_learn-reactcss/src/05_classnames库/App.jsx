import React, {PureComponent} from 'react';
import classNames from 'classnames';

export class App extends PureComponent {
  render() {
    return <div className={classNames('qiyana', {kiana: true})}>App</div>;
  }
}

export default App;
