import React, {PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {username: '', password: ''};
  }

  handleSubmitClick(event) {
    event.preventDefault();

    const {username, password} = this.state;
    console.log(username, password);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const {username, password} = this.state;

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
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label htmlFor="password">
            密码:
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>

          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
