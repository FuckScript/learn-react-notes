import React, {PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {appStyle: {color: 'red', fontSize: '30px'}};
  }

  render() {
    const {appStyle} = this.state;
    return (
      // <div style={{color: 'red'}}>App</div>
      <div style={appStyle}>App</div>
    );
  }
}

export default App;
