import React, {PureComponent} from 'react';
import HomeInfo from './HomeInfo';
import HomeBanner from './HomeBanner';

export class Home extends PureComponent {
  render() {
    const {name, age} = this.props;
    console.log(this.props);

    return (
      <div>
        {name}-{age}
        <HomeInfo />
        <HomeBanner />
      </div>
    );
  }
}

export default Home;
