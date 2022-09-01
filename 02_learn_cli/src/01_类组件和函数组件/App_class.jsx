import {Component} from 'react';

// 1. 类组件
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'App Component',
    };
  }

  /**
   * render函数一般在组件第一次调用时执行
   * 当 this.props 和 this.state 发生变化时也会重新执行
   *
   * @returns 
   *  React 元素
   *  数组和fragments
   *  Portals
   *  字符串和数值类型
   *  ...
   */
  render() {
    const {message} = this.state;
    return <>{message}</>;
  }
}
