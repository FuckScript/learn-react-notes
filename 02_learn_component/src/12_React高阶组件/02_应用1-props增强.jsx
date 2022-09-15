import React, {PureComponent} from 'react';

function enhancedUserInfo(OriginComponent) {
  return class extends PureComponent {
    constructor() {
      super();
      this.state = {
        userInfo: {name: 'Qiyana', level: 99},
      };
    }

    render() {
      return <OriginComponent {...this.props} {...this.state.userInfo} />;
    }
  };
}

const Hello = enhancedUserInfo(function (props) {
  return <h4>Hello: {props.name}</h4>;
});

export class App extends PureComponent {
  render() {
    return <div>App</div>;
  }
}

export default App;
