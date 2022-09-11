import React, {PureComponent} from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div.attrs((props) => ({
  color: props.color,
}))`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
`;

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {size: 30, color: 'red'};
  }

  render() {
    const {size, color} = this.state;
    return (
      <AppWrapper size={size}>
        <button onClick={() => this.setState({size: size + 2})}>
          字体增大
        </button>
        <h4>App Component</h4>
      </AppWrapper>
    );
  }
}

export default App;
