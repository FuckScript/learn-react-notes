import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = { count: 1207 }
  }

  changeCount(count) {
    this.setState({
      count: this.state.count + count
    })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h4>当前计数: {count}</h4>
        <button onClick={() => this.changeCount(1)}>+</button>
        <button onClick={() => this.changeCount(-1)}>-</button>
      </div>
    )
  }
}

export default App
