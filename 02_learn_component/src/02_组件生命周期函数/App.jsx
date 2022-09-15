import {Component} from 'react';
import HelloWorld from './HelloWorld';

export default class App extends Component {
  constructor() {
    super();
    this.state = {isShowHW: true};
  }

  render() {
    const {isShowHW} = this.state;

    return (
      <div>
        <h2>App Component</h2>
        <button onClick={() => this.setState({isShowHW: !isShowHW})}>
          显示/隐藏
        </button>
        {isShowHW && <HelloWorld />}
      </div>
    );
  }
}
