import React, {PureComponent} from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: red;
  font-size: 30px;

  &:hover {
    background-color: #000;
  }
`;

export class App extends PureComponent {
  render() {
    return <AppWrapper>App</AppWrapper>;
  }
}

export default App;
