import React, {PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {inputValue: ''};
  }

  inputChange(e) {
    this.setState({inputValue: e.target.value}, () => {
      console.log(this.state.inputValue);
    });
  }

  render() {
    const {inputValue} = this.state;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => this.inputChange(e)}
        />
      </div>
    );
  }
}

export default App;
