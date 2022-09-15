import React, {PureComponent} from 'react';
import ThemeContext from './context/theme-content';
import UserContext from './context/user-content';
import Home from './Home';
import Profile from './Profile';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {info: {name: 'iyunyu', age: 19}};
  }

  render() {
    const {info} = this.state;

    return (
      <div>
        <ThemeContext.Provider value={{color: 'red', size: '30'}}>
          <UserContext.Provider value={{nickname: 'zhoucan'}}>
            <Home {...info} />
          </UserContext.Provider>
        </ThemeContext.Provider>
        <Profile />
      </div>
    );
  }
}

export default App;
