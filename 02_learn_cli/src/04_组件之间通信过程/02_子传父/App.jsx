import React, {Component} from 'react';
import AddCount from './AddCount';

export class App extends Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  changeCounter(count) {
    console.log(count);

    this.setState({
      count: this.state.count + count,
    });
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <h4>当前计数:{count}</h4>
        <AddCount addClick={(count) => this.changeCounter(count)} />
      </div>
    );
  }
}

export default App;
