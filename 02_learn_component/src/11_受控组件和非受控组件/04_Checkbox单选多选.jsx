import React, {PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isAgree: false,
      hobbies: [
        {value: 'sing', text: '唱', isChecked: false},
        {value: 'dance', text: '跳', isChecked: false},
        {value: 'rap', text: 'rap', isChecked: false},
      ],
    };
  }

  handleSubmitClick(event) {
    event.preventDefault();
  }

  handleAgreeChange(event) {
    this.setState({isAgree: event.target.checked});
  }

  handleHobbiesChange(event, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = event.target.checked;
    this.setState({hobbies});
  }

  render() {
    const {isAgree, hobbies} = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <div>
            {/* 单选 */}
            <label htmlFor="agree">
              <input
                id="agree"
                type="checkbox"
                checked={isAgree}
                onChange={(e) => this.handleAgreeChange(e)}
              />
              同意协议
            </label>
          </div>
          <div>
            {/* 多选 */}
            {hobbies.map((item, index) => {
              return (
                <label htmlFor={item.value} key={item.value}>
                  <input
                    type="checkbox"
                    id={item.value}
                    checked={item.isChecked}
                    onChange={(e) => this.handleHobbiesChange(e, index)}
                  />
                  <span>{item.text}</span>
                </label>
              );
            })}
          </div>
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}

export default App;
