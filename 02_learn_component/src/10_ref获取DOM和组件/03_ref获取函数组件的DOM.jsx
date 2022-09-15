import React, {createRef, forwardRef, PureComponent} from 'react';

class App extends PureComponent {
  constructor() {
    super();
    this.hwRef = createRef();
  }

  getComponent() {
    console.log(this.hwRef.current);
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

const Hello = forwardRef(function Hello(props, ref) {
  return <div ref={ref}>Hello</div>;
});

export default App;
