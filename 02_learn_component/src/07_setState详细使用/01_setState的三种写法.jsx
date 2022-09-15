import React, {Component} from 'react';

export class App extends Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  increment() {
    // setState使用方法1: 对象
    this.setState({
      count: this.state.count + 1,
    });

    // setState使用方法2: 函数
    this.setState((state, props) => {
      console.log(state, props);
      return {count: state.count + 1};
    });

    // 使用方式3: 当state合并完成之后回调第二个函数
    this.setState(
      (state, props) => ({count: state.count + 1}),
      () => console.log(this.state.count)
    );
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <h4>当前计数: {count}</h4>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    );
  }
}

export default App;
