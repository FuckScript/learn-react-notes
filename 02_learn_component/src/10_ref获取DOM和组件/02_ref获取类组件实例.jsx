import React, {createRef, PureComponent} from 'react';

class App extends PureComponent {
  constructor() {
    super();
    this.hwRef = createRef();
  }

  getComponent() {
    this.hwRef.current.logHello()
  }

  render() {
    return (
      <div>
        <Hello ref={this.hwRef} />
        <button onClick={() => this.getComponent()}>获取组件</button>
      </div>
    );
  }
}

class Hello extends PureComponent {
  logHello() {
    console.log('Hello');
  }

  render() {
    return <div>Hello</div>;
  }
}

export default App;
