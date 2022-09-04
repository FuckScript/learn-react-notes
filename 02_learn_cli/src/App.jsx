import {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {message: 'Qiyana'};
  }

  changeText() {
    this.setState({message: 'Qiyana'});
  }

  render() {
    const {message} = this.state;
    console.log('App Render');

    return (
      <div>
        <h4>{message}</h4>
        <button onClick={() => this.changeText()}>修改文本</button>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // if (this.state !== nextState || this.props !== nextProps) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }
}

export default App;
