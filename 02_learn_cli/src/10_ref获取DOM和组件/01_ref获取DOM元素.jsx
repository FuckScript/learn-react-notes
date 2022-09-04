import React, {createRef, PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    // this.state = {};

    this.titleRef = createRef();
    this.titleEl = null;
  }

  getNativeDOM() {
    // 方式一(不推荐): 在 React 元素上绑定一个 ref 字符串
    // console.log(this.refs.Qiyana);

    // 方式二(推荐): 提前创建好 ref 对象, createRef(), 将创建出来的对象绑定到元素
    console.log(this.titleRef.current);

    // 方式三: 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入
    // console.log(this.titleEl);
  }

  render() {
    return (
      <div>
        <h4 ref={this.titleRef}>App Component</h4>
        {/* <h4 ref={(el) => (this.titleEl = el)}>App Component</h4> */}
        <button onClick={() => this.getNativeDOM()}>获取DOM</button>
      </div>
    );
  }
}

export default App;
