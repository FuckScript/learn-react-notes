import {Component} from 'react';
import MainBanner from './MainBanner';
import MainProductList from './MainProductList';

class Main extends Component {
  render() {
    return (
      <div>
        <MainBanner />
        <MainProductList />
      </div>
    );
  }
}

export default Main;
