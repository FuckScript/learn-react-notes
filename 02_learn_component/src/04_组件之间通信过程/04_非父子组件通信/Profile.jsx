import React, {PureComponent} from 'react';
import ThemeContext from './context/theme-content';

export class Profile extends PureComponent {
  render() {
    const {color} = this.context;
    return <div style={{color: color}}>Profile</div>;
  }
}

Profile.contextType = ThemeContext;

export default Profile;
