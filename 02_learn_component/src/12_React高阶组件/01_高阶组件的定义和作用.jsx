import React, {PureComponent} from 'react';

function hoc(Cpn) {
  return class extends PureComponent {
    render() {
      return (
        <div>
          <Cpn />
        </div>
      );
    }
  };
}

class Hello extends PureComponent {
  render() {
    return <div>Hello Qiyana</div>;
  }
}

const HocHello = hoc(Hello);

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HocHello />
      </div>
    );
  }
}

export default App;
