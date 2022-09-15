import React, {PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {username: ''};
  }

  handleSubmitClick(event) {
    event.preventDefault();
    console.log(this.state.username);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  render() {
    const {username} = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            用户:
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => this.handleUsernameChange(e)}
            />
          </label>

          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
