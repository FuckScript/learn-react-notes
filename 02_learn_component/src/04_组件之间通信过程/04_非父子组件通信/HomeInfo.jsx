import React, {PureComponent} from 'react';
import ThemeContext from './context/theme-content';
import UserContext from './context/user-content';

export class HomeInfo extends PureComponent {
  render() {
    const {color} = this.context;
    return (
      <div style={{color: color}}>
        HomeInfo
        <UserContext.Consumer>
          {(value) => <h2>用户: {value.nickname}</h2>}
        </UserContext.Consumer>
      </div>
    );
  }
}

HomeInfo.contextType = ThemeContext;

export default HomeInfo;
