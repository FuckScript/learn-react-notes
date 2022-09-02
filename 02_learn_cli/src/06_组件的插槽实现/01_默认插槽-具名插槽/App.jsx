import React, {Component} from 'react';
import NavBar from './NavBar/NavBar';

export class App extends Component {
  render() {
    return (
      <div>
        {/* 
          <NavBar>
            <button>按钮</button>
            <h4>我是标题</h4>
            <i>斜体文字</i>
          </NavBar>
        */}
        <NavBar
          leftSlot={<button>按钮</button>}
          centerSlot={<h4>我是标题</h4>}
          rightSlot={<i>斜体文字</i>}
        />
      </div>
    );
  }
}

export default App;
