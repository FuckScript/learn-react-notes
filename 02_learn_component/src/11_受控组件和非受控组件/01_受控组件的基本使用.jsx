import React, {PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {inputValue: ''};
  }

  changeValue(event) {
    this.setState({inputValue: event.target.vlaue});
  }

  render() {
    const {inputValue} = this.state;

    return (
      <div>
        {/* 受控组件 */}
        <h4>受控组件的值: {inputValue}</h4>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => this.changeValue(e)}
        />

        {/* 非受控组件 */}
        <input type="text" />
      </div>
    );
  }
}

export default App;
