import React, {Component} from 'react';

export class App extends Component {
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
      </div>
    );
  }

  shouldComponentUpdate(preProps, preState) {
    if (this.state.message !== preState.message) {
      return true;
    } else {
      return false;
    }
  }
}

class Hello extends Component {
  render() {
    console.log('-----Hello render');
    return <div>Hello</div>;
  }

  shouldComponentUpdate() {
    return false;
  }
}

export default App;
