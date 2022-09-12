import { PureComponent } from 'react';
import {createContext} from 'react';
export const StoreContext = createContext();

export class Provider extends PureComponent {
  render() {
    return (
      <StoreContext.Provider value={this.props.store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}
