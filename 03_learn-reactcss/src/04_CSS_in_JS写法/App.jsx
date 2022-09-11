import React, {PureComponent} from 'react';
import styled from 'styled-components';

const IyunyuButton = styled.button`
  border: 1px solid red;
`;

const ButtonWrapper = styled(IyunyuButton)`
  color: red;
`;

const HelloWrapper = styled.div`
  width: 200px;
  height: 100px;
`;

export class App extends PureComponent {
  render() {
    return (
      <HelloWrapper>
        <ButtonWrapper>Iyunyu</ButtonWrapper>
      </HelloWrapper>
    );
  }
}

export default App;
