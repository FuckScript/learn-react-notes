import React, {createRef, PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {intro: 'Qiyana'};

    this.inputRef = createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.inputRef.current.value);
  }

  render() {
    const {intro} = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" ref={this.inputRef} defaultValue={intro} />
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}

export default App;
