import {Component} from 'react';

export default class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {message: 'Kiana'};

    console.log('-----constructor');
  }

  changeText() {
    this.setState({message: 'Qiyana'});
  }

  render() {
    const {message} = this.state;
    console.log('-----render');
    return (
      <div>
        <h4>HelloWorld Component</h4>
        <p>{message}</p>
        <button onClick={(e) => this.changeText()}>按钮</button>
      </div>
    );
  }

  // 组件挂载完成
  componentDidMount() {
    console.log('-----componentDidMount');
  }

  // 组件更新完成
  componentDidUpdate(preProps, preState, snapshot) {
    console.log(preProps, preState, snapshot);
    console.log('-----componentDidUpdate');
  }

  // 组件卸载之前
  componentWillUnmount() {
    console.log('-----componentWillUnmount');
  }

  // 组件状态更新 render函数是否重新执行
  shouldComponentUpdate() {
    // true: 需要重新执行
    // false: 不需要重新执行
    return true;
  }

  // 更新之前保存数据, 返回值可以被componentDidUpdate接收
  getSnapshotBeforeUpdate() {
    return {name: 'Qiyana'};
  }
}
