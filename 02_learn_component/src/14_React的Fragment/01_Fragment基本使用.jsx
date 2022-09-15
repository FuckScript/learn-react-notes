import React, {PureComponent, Fragment} from 'react';

export class App extends PureComponent {
  render() {
    return (
      // <Fragment>
      //   <h4>App Component</h4>
      //   <p>我是组件</p>
      // </Fragment>

      <>
        <h4>App Component</h4>
        <p>我是组件</p>
      </>
    );
  }
}

export default App;
