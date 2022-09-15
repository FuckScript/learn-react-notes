import React, {PureComponent} from 'react';
import {createPortal} from 'react-dom';

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App Component</h2>
        <Modal>
          <h4>我是标题</h4>
          <p>我是文本!</p>
        </Modal>
      </div>
    );
  }
}

class Modal extends PureComponent {
  render() {
    return createPortal(this.props.children, document.querySelector('#modal'));
  }
}

export default App;
