import React, {PureComponent, StrictMode} from 'react';
import Hello from './Hello';

export class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Hello />
        </StrictMode>
      </div>
    );
  }
}

export default App;
