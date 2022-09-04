import React, {PureComponent, memo} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {message: 'Hello Kiana', counter: 0};
  }

  changeMessage() {
    this.setState({message: 'Hello Kiana'});
  }

  increment() {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    const {message, counter} = this.state;
    console.log('-----App render');

    return (
      <div>
        <h2>{message}</h2>
        <h4>当前计数: {counter}</h4>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.changeMessage()}>修改文本</button>
        <Hello />
        <Hi counter={counter} />
      </div>
    );
  }
}

class Hello extends PureComponent {
  render() {
    console.log('-----Hello render');
    return <div>Hello</div>;
  }
}

const Hi = memo(function (props) {
  console.log('-----Hi~');
  return <div>Hi~ Counter: {props.counter}</div>;
});

export default App;
