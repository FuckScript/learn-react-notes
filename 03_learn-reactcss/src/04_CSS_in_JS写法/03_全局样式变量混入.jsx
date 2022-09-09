import React, {PureComponent} from 'react';
import styled from 'styled-components';
import {primaryColor} from './variable';

const AppWrapper = styled.div.attrs({color: 'blue'})`
  font-size: ${(props) => props.size}px;
  color: ${primaryColor};
`;

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {size: 30};
  }

  render() {
    const {size} = this.state;
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
