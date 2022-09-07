import React, {PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {fruit: ['orange']};
  }

  handleSubmitClick(event) {
    event.preventDefault();
  }

  handleFruitChange(event) {
    const options = Array.from(event.target.selectedOptions);
    const values = options.map((item) => item.value);
    this.setState({fruit: values});

    // 额外补充: Array.from(可迭代对象)
    // Array.from(arguments)
    // const values2 = Array.from(
    //   event.target.selectedOptions,
    //   (item) => item.value
    // );
    // console.log(values2);
  }

  render() {
    const {fruit} = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <select
            value={fruit}
            onChange={(e) => this.handleFruitChange(e)}
            multiple>
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select>

          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
