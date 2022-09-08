import React, {PureComponent} from 'react';
import {CSSTransition} from 'react-transition-group';
import './style.css';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {isShow: true};
  }

  render() {
    const {isShow} = this.state;

    return (
      <div>
        <button onClick={() => this.setState({isShow: !isShow})}>
          显示/隐藏
        </button>

        <CSSTransition
          in={isShow}
          unmountOnExit={true}
          classNames="qiyana"
          timeout={1000}
          appear>
          <h4>Hello, Mengjiang</h4>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
